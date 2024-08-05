// src/pages/PageTwo.jsx
import React, { useState } from 'react';
import '../styles/animations.css'; // Import your CSS file

const PageTwo = () => {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [result, setResult] = useState(null);

  const areAnagrams = (str1, str2) => {
    const normalize = (str) =>
      str
        .replace(/\s+/g, '') // Remove all whitespace
        .toLowerCase() // Convert to lowercase
        .split('') // Convert string to array of characters
        .sort() // Sort characters alphabetically
        .join(''); // Convert array back to string

    return normalize(str1) === normalize(str2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(areAnagrams(string1, string2));
  };

  return (
    <div className="text-white p-4 fade-in"> {/* Added fade-in animation */}
      <h1 className="text-2xl font-bold mb-4">Anagram Detection</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block mb-1">String 1:</label>
          <input
            type="text"
            value={string1}
            onChange={(e) => setString1(e.target.value)}
            className={`bg-gray-800 text-white p-2 rounded w-full transition duration-200 focus:outline-none focus:border-blue-500 ${
              !string1 && result !== null ? 'shake' : ''
            }`} // Add shake animation if empty and result is shown
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">String 2:</label>
          <input
            type="text"
            value={string2}
            onChange={(e) => setString2(e.target.value)}
            className={`bg-gray-800 text-white p-2 rounded w-full transition duration-200 focus:outline-none focus:border-blue-500 ${
              !string2 && result !== null ? 'shake' : ''
            }`} // Add shake animation if empty and result is shown
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 p-2 rounded transition duration-200 transform hover:scale-105"
        >
          Check
        </button>
      </form>
      {result !== null && (
        <div className={`text-xl fade-in`}> {/* Added fade-in animation */}
          {result ? 'The strings are anagrams!' : 'The strings are not anagrams.'}
        </div>
      )}
    </div>
  );
};

export default PageTwo;
