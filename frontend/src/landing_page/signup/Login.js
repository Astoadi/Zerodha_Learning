import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { clientServer } from '../../axiosConfig';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

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
        "/users/login",
        inputValue,
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        toast.success(message, { position: "bottom-left" });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error(message, { position: "bottom-left" });
      }
    } catch (error) {
      toast.error("Something went wrong!", { position: "bottom-left" });
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row flex-column align-items-center justify-content-center shadow-lg p-4 rounded-4" style={{ backgroundColor: '#f9f9f9' }}>
        
        {/* Login Form */}
        <div className="col-12 col-md-8 mb-4">
          <h2 className="mb-4 text-primary text-center">Login to Your Account</h2>
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
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <p className="mt-3 text-center">
              Don’t have an account? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-8">
          <img
            src="/media/images/signup.png"
            alt="Login Illustration"
            className="img-fluid rounded-3 mx-auto d-block"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
