import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/user.actions";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const {email,password} = user;
  const handleChange = (e) => {
   
      setUser({ ...user, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userObject = {
      email,
      password
    };
  
    console.log("User object before dispatch:", userObject);
  
    try {
      await dispatch(login(userObject));
      setUser({
        email: "",
        password: "",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container w-5/12 mx-auto border mt-8">
        <h1 className="text-3xl text-center font-bold mb-4">Login</h1>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
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
              value={password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
         
          <button
            type="submit"
            className="bg-blue-500 text-white w-full mb-5 p-2 rounded hover:bg-blue-700"
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
         
        </form>
        <p className='text-center mb-4'>Don't have an account? <Link className='text-green-500 text-center mb-5' to={'/signup'}>Sign Up here</Link></p>

      </div>
    </div>
  );
}

export default Login;
