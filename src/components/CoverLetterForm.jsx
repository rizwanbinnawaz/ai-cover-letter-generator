import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateField } from '../store/formSlice';

export default function CoverLetterForm({ onGenerate }) {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
    if (value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.jobTitle?.trim()) newErrors.jobTitle = 'Job Title is required';
    if (!form.companyName?.trim()) newErrors.companyName = 'Company Name is required';
    if (!form.experience?.trim()) newErrors.experience = 'Experience is required';
    if (!form.skills?.trim()) newErrors.skills = 'Skills are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = () => {
    if (validate()) {
      onGenerate(form);
    }
  };

  return (
    <div className="max-w-xl mx-auto border border-gray-200 p-8 rounded-2xl shadow-xl space-y-5">
      <h2 className="text-2xl font-bold text-gray-800">Generate a Cover Letter</h2>

      <div className="space-y-4">
        <div>
          <input
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            placeholder="Job Title (e.g., Frontend Developer)"
            className={`w-full p-3 rounded-xl border transition shadow-sm focus:outline-none focus:ring-2 ${
              errors.jobTitle ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.jobTitle && <p className="text-sm text-red-500 mt-1">{errors.jobTitle}</p>}
        </div>

        <div>
          <input
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="Company Name (e.g., Google)"
            className={`w-full p-3 rounded-xl border transition shadow-sm focus:outline-none focus:ring-2 ${
              errors.companyName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.companyName && <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>}
        </div>

        <div>
          <textarea
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder="Briefly describe your relevant experience..."
            rows="3"
            className={`w-full p-3 rounded-xl border transition shadow-sm focus:outline-none focus:ring-2 ${
              errors.experience ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.experience && <p className="text-sm text-red-500 mt-1">{errors.experience}</p>}
        </div>

        <div>
          <textarea
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Mention key skills or technologies..."
            rows="3"
            className={`w-full p-3 rounded-xl border transition shadow-sm focus:outline-none focus:ring-2 ${
              errors.skills ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.skills && <p className="text-sm text-red-500 mt-1">{errors.skills}</p>}
        </div>
      </div>

      <button
        onClick={handleGenerate}
        className="w-full flex items-center cursor-pointer justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-xl shadow-md transition duration-200"
      >
        🚀 Generate Cover Letter
      </button>
    </div>
  );
}
