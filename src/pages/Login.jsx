import React, { useState } from "react";
import { Link } from "react-router-dom";
import Notification from "../components/Notification";
import "../styles/pages/login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {};
  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="toggle-link">
            <h2>New here ?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
            <Link to="/signup">
              <button className="sign-up-btn">SIGN UP</button>
            </Link>
          </div>
          <div className="form-group">
            <h2>Login</h2>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn-primary">
              Login
            </button>
            <div className="social-login">
              <p>Or Sign in with social platforms</p>
              <div className="social-icons">
                <button>
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button>
                  <i className="fab fa-twitter"></i>
                </button>
                <button>
                  <i className="fab fa-google"></i>
                </button>
                <button>
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
