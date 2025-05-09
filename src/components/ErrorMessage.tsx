import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg font-mono text-sm">
    {message}
  </div>
);