// Signup.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profilePic: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'profilePic') {
      // Handle file input separately
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here, for example, send the data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Navbar />
      <div className="container w-5/12 mx-auto border mt-8">
        <h1 className="text-3xl text-center font-bold mb-4">Signup</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profilePic" className="block text-gray-700 text-sm font-bold mb-2">
              Profile Picture (Upload)
            </label>
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full mb-5 p-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
         
        </form>
        <p className='text-center mb-4'>Already have an account. ? <Link className='text-green-500 text-center mb-5' to={'/login'}>Login here</Link></p>
      </div>
    </div>
  );
}

export default Signup;
