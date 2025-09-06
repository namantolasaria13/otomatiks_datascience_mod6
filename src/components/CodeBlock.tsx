import React, { useState } from 'react';
import { Copy } from 'lucide-react';

interface CodeBlockProps {
  label?: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ label, code }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-300 text-sm">{label ?? 'Code'}</span>
        <button onClick={onCopy} className="p-1 text-gray-400 hover:text-white transition-colors" aria-label="Copy">
          <Copy className="w-4 h-4" />
        </button>
      </div>
      <pre className="text-sm text-green-400 whitespace-pre-wrap"><code>{code}</code></pre>
      {copied && <div className="text-xs text-emerald-400 mt-2">Copied!</div>}
    </div>
  );
};

export default CodeBlock;
