import axios from 'axios';
import { useMutation } from '@tanstack/react-query';


export const generateCoverLetter = async (form) => {
  const prompt = `
Write a professional cover letter for ${form.jobTitle} at ${form.companyName}.
Experience: ${form.experience}
Skills: ${form.skills}
Make it confident, concise, and tailored to the role.
  `;

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  
  const res = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      model: 'mistralai/mistral-7b-instruct',
      messages: [{ role: 'user', content: prompt }],
    },
    {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'HTTP-Referer': 'https://linkedin.com/in/rizwanbinnawaz/', // Optional
        'Content-Type': 'application/json',
      }
    }
  );

  return res.data.choices[0].message.content;
};

export const useGenerateCoverLetter = () =>
  useMutation({
    mutationFn: generateCoverLetter
  });
