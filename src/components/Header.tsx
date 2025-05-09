import React from 'react';
import { GitBranch } from 'lucide-react';
import { Star } from 'lucide-react';

export const Header: React.FC = () => (
  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-6">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-3">
        <GitBranch className="w-8 h-8" />
        <h1 className="font-mono text-2xl font-bold">Repositree</h1>
      </div>
      <a
        href="https://github.com/abishekvenkat/repositree"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-2 border border-gray-200 dark:border-gray-800 rounded-lg font-mono text-sm hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
      >
        <Star className="w-4 h-4" />
        on GitHub
      </a>
    </div>
    <p className="text-sm text-gray-500 dark:text-gray-400">Git Repo File Tree Generator</p>
  </div>
);