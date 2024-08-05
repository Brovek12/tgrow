// src/pages/PageFour.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { setFormData } from '../store/store'; // Adjusted path for the Redux action
import '../styles/animations.css';

const PageFour = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormDataState] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    password: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!/^[a-zA-Z]+$/.test(formData.name)) {
      newErrors.name = 'Name should contain only alphabets.';
    }
    if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number should contain only numbers.';
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!/^\d+$/.test(formData.age) || formData.age < 0) {
      newErrors.age = 'Age should be a positive number.';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters long.';
    }
    if (!formData.address) {
      newErrors.address = 'Address is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(setFormData(formData)); // Dispatch form data to Redux store
      navigate('/result'); // Navigate to PageFive after submission
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-5 rounded fade-in">
      <h1 className="text-2xl font-bold mb-4 text-white">Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border ${
              errors.name ? 'border-red-500 shake' : 'border-gray-300'
            } rounded transition duration-200 focus:outline-none focus:border-blue-500`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-white">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border ${
              errors.phone ? 'border-red-500 shake' : 'border-gray-300'
            } rounded transition duration-200 focus:outline-none focus:border-blue-500`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border ${
              errors.email ? 'border-red-500 shake' : 'border-gray-300'
            } rounded transition duration-200 focus:outline-none focus:border-blue-500`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-white">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border ${
              errors.age ? 'border-red-500 shake' : 'border-gray-300'
            } rounded transition duration-200 focus:outline-none focus:border-blue-500`}
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-white">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border ${
              errors.password ? 'border-red-500 shake' : 'border-gray-300'
            } rounded transition duration-200 focus:outline-none focus:border-blue-500`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-white">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border ${
              errors.address ? 'border-red-500 shake' : 'border-gray-300'
            } rounded transition duration-200 focus:outline-none focus:border-blue-500`}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PageFour;
