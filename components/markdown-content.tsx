'use client'
import React from 'react';
import Markdown from 'react-markdown';

function MarkdownContent(props) {
  console.log("Nothing?", props.content);

  const components = {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b border-gray-100 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-2 text-gray-700">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold mb-2 text-gray-700">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold mb-2 text-gray-600">
        {children}
      </h6>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="mb-4 text-gray-700 leading-relaxed">
        {children}
      </p>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc text-gray-700 space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal text-gray-700 space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 mb-4 italic text-gray-600 bg-gray-50 py-2">
        {children}
      </blockquote>
    ),

    // Code blocks and inline code
    code: ({ inline, children, className }) => {
      if (inline) {
        return (
          <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
            {children}
          </code>
        );
      }
      return (
        <code className={`block bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto text-sm font-mono ${className || ''}`}>
          {children}
        </code>
      );
    },

    // Pre (code block wrapper)
    pre: ({ children }) => (
      <pre className="mb-4">
        {children}
      </pre>
    ),

    // Links
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    // Images
    img: ({ src, alt }) => (
      <img 
        src={src} 
        alt={alt} 
        className="max-w-full h-auto rounded-lg shadow-md mb-4"
      />
    ),

    // Tables
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-50">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-gray-200">
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-gray-50">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {children}
      </td>
    ),

    // Horizontal rule
    hr: () => (
      <hr className="border-0 border-t border-gray-300 my-8" />
    ),

    // Strong and emphasis
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-700">
        {children}
      </em>
    ),
  };

  return (
    <div className="prose max-w-none">
      <Markdown components={components}>
        {props.content}
      </Markdown>
    </div>
  );
}

export default MarkdownContent;