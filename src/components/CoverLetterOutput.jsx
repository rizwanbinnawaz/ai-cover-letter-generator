import { useRef } from 'react';
import CopyButton from '../components/CopyButton';


export default function CoverLetterOutput({ letter }) {
  const outputRef = useRef();

  return (
    <div className="max-w-xl mx-auto border mt-10 lg:mt-0 md:mt-10 border-gray-200 p-8 rounded-2xl shadow-xl space-y-5">
      <div className="flex gap-3 justify-between mt-6 items-center mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Your Cover Letter</h3>
        <CopyButton textToCopy={letter} />
      </div>
      <div
        ref={outputRef}
        className="whitespace-pre-wrap text-sm leading-6 text-gray-900 bg-white p-4 rounded-md border border-gray-300 shadow-inner"
        style={{
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {letter}
      </div>


    </div>
  );
}
