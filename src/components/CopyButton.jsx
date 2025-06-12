// components/CopyButton.jsx
import React, { useState, useEffect } from 'react';

const CopyButton = ({ textToCopy, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch {
      alert('Copy failed');
    }
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={handleCopy}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition cursor-pointer
          ${copied ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      >
        {copied ? (
          <>
            <CheckIcon />
            Copied
          </>
        ) : (
          <>
            <CopyIcon />
            Copy
          </>
        )}
      </button>

      {copied && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-green-600 text-white text-xs font-medium shadow-lg animate-fadeInOut">
          Text copied to clipboard!
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }
        .animate-fadeInOut {
          animation: fadeInOut 2s ease forwards;
        }
      `}</style>
    </div>
  );
};

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8M8 8h8M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H8l-4 4v10a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export default CopyButton;
