'use client'

import { Provider } from 'react-redux';
import store from '../store';
import CoverLetterForm from '../components/CoverLetterForm';
import CoverLetterOutput from '../components/CoverLetterOutput';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useGenerateCoverLetter } from '../api/ai';

const queryClient = new QueryClient();

function AppContent() {
  const { mutate, data, isPending } = useGenerateCoverLetter();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">AI Cover Letter Generator</h1>

    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left: Form */}
      <div className="lg:w-1/2">
        <CoverLetterForm onGenerate={mutate} />
        {isPending && <p className="text-blue-500 mt-4">Generating...</p>}
      </div>

      {/* Right: Output */}
      <div className="lg:w-1/2">
        {data && <CoverLetterOutput letter={data} />}
      </div>
    </div>
  </div>

  );
}

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </Provider>
  );
}
