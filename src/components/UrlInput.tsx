import React from 'react';

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export const UrlInput: React.FC<UrlInputProps> = ({ value, onChange, onSubmit, loading }) => (
  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
    <form onSubmit={onSubmit}>
      <div className="space-y-2">
        <label htmlFor="repo-url" className="block font-mono text-sm font-bold">
          Repository URL
        </label>
        <div className="flex gap-3">
          <input
            id="repo-url"
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://github.com/username/repository"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black font-mono text-sm focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 border border-gray-200 dark:border-gray-800 rounded-lg font-mono text-sm hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {loading ? 'Loading...' : 'Generate Tree'}
          </button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
            Make sure the repo is public
        </p>
      </div>
    </form>
  </div>
);