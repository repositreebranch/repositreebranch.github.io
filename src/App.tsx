import React, { useState } from 'react';
import { Header } from './components/Header';
import { UrlInput } from './components/UrlInput';
import { ErrorMessage } from './components/ErrorMessage';
import { TreeDisplay } from './components/TreeDisplay';
import { fetchRepoStructure } from './utils/github';
import { TreeNode } from './types';

function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [fileTree, setFileTree] = useState<TreeNode | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const cleanUrl = repoUrl.replace(/\.git$/, '');
      const data = await fetchRepoStructure(cleanUrl);
      setFileTree(data);
    } catch (err) {
      setError('Failed to fetch repository data. Please check the URL and the repo visibility, and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <Header />
          <UrlInput 
            value={repoUrl} 
            onChange={setRepoUrl}
            onSubmit={handleSubmit}
            loading={loading}
          />
          {error && <ErrorMessage message={error} />}
          {fileTree && <TreeDisplay tree={fileTree} />}
        </div>
      </div>
    </div>
  );
}

export default App;