import React, { useState } from 'react';
import { TreeNode } from '../types';
import { generateTreeText } from '../utils/treeFormatter';
import { Check } from 'lucide-react';

interface TreeDisplayProps {
  tree: TreeNode;
}

export const TreeDisplay: React.FC<TreeDisplayProps> = ({ tree }) => {
  const [copied, setCopied] = useState(false);  
  const treeText = generateTreeText(tree);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(treeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
        <h2 className="font-mono text-sm font-bold">File Structure</h2>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg font-mono text-sm hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors inline-flex items-center gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            'Copy'
          )}
        </button>
      </div>
      <pre className="p-6 font-mono text-sm whitespace-pre overflow-x-auto">
        {treeText}
      </pre>
    </div>
  );
};