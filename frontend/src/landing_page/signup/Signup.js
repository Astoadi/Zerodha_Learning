import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { clientServer } from '../../axiosConfig';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await clientServer.post(
        "/users/signup",
        inputValue,
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        toast.success(message || "Signup successful!", { position: "bottom-left" });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error(message || "Signup failed!", { position: "bottom-left" });
      }
    } catch (error) {
      toast.error("Something went wrong!", { position: "bottom-left" });
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row flex-column align-items-center justify-content-center shadow-lg p-4 rounded-4" style={{ backgroundColor: '#f9f9f9' }}>

        {/* Image */}
        <div className="col-12 col-md-8 mb-4">
          <img
            src="/media/images/signup.png"
            alt="Signup Illustration"
            className="img-fluid rounded-3 mx-auto d-block"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>

        {/* Signup Form */}
        <div className="col-12 col-md-8">
          <h2 className="mb-4 text-center text-primary">Create a New Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">Sign Up</button>

            <p className="mt-3 text-center">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
