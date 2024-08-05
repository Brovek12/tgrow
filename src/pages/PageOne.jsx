// src/pages/PageOne.jsx
import React, { useState } from 'react';
import '../styles/animations.css'; // Import your CSS animations

const PageOne = () => {
  const [numbers, setNumbers] = useState('');
  const [targetSum, setTargetSum] = useState('');
  const [pairs, setPairs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numArray = numbers.split(',').map(Number);
    const target = Number(targetSum);
    findPairs(numArray, target);
  };

  const findPairs = (numArray, target) => {
    const result = [];
    const seen = new Set();

    numArray.forEach(num => {
      const complement = target - num;
      if (seen.has(complement)) {
        result.push([complement, num]);
      }
      seen.add(num);
    });

    setPairs(result);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-5 rounded fade-in">
      <h1 className="text-2xl font-bold mb-4 text-white">Array Manipulation Challenge</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white">Enter numbers (comma separated):</label>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded transition duration-200 focus:outline-none focus:border-blue-500"
            placeholder="e.g. 1, 2, 3, 4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white">Enter target sum:</label>
          <input
            type="number"
            value={targetSum}
            onChange={(e) => setTargetSum(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded transition duration-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 transform hover:scale-105"
        >
          Find Pairs
        </button>
      </form>

      {pairs.length > 0 && (
        <div className="mt-4 text-white">
          <h2 className="text-xl font-bold">Pairs Found:</h2>
          <ul className="list-disc list-inside">
            {pairs.map((pair, index) => (
              <li key={index} className="animate-fade-in">{`(${pair[0]}, ${pair[1]})`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PageOne;
