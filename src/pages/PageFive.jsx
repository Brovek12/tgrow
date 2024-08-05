// src/pages/PageFive.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const PageFive = () => {
  const formData = useSelector((state) => state.formData); // Retrieve form data from Redux store

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-5 rounded fade-in">
      <h1 className="text-2xl font-bold mb-4 text-white">Submitted Form Data</h1>
      <div className="text-white">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        {/* Add password display if needed, but consider security practices */}
      </div>
    </div>
  );
};

export default PageFive;
