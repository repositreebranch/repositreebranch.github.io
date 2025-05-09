import React from 'react';
import { File, Folder } from 'lucide-react';

interface TreeNode {
  name: string;
  type: 'file' | 'directory';
  children?: TreeNode[];
}

interface FileTreeProps {
  tree: TreeNode;
}

export const FileTree: React.FC<FileTreeProps> = ({ tree }) => {
  const renderNode = (node: TreeNode, level: number = 0) => {
    const indent = level * 20;

    return (
      <div key={node.name} style={{ marginLeft: `${indent}px` }}>
        <div className="flex items-center gap-2 py-1">
          {node.type === 'directory' ? (
            <Folder className="w-4 h-4 text-blue-500" />
          ) : (
            <File className="w-4 h-4 text-gray-500" />
          )}
          <span className="font-mono text-sm">{node.name}</span>
        </div>
        {node.children?.map((child) => renderNode(child, level + 1))}
      </div>
    );
  };

  return <div className="space-y-1">{renderNode(tree)}</div>;
};