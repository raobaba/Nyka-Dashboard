import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/actions/user.actions";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [avatar, setAvatar] = useState(null);
  const { name, email, password } = user;
  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      if (file) {
        console.log("Selected file:", file);
        setAvatar(file);
      }
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userObject = {
      name,
      email,
      password,
      avatar,
    };
  
    console.log("User object before dispatch:", userObject);
  
    try {
      await dispatch(signup(userObject));
      // Clear form fields on successful signup
      setUser({
        name: "",
        email: "",
        password: "",
      });
      setAvatar(null)
      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  
  
  

  return (
    <div>
      <Navbar />
      <div className="container w-5/12 mx-auto border mt-8">
        <h1 className="text-3xl text-center font-bold mb-4">Signup</h1>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
          <div className="mb-4">
            <label
              htmlFor="avatar"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Profile Picture (Upload)
            </label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white w-full mb-2 p-2 rounded hover:bg-blue-700"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center mb-2">
          Already have an account. ?{" "}
          <Link className="text-green-500 text-center mb-5" to={"/login"}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
