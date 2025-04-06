import React, { useState } from "react";
import { Link } from "react-router-dom";
import Notification from "../components/Notification";
import "../styles/pages/login.css";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    type: "",
    show: false,
  });
  const showNotification = (type, message) => {
    setNotification({ message, type, show: true });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      showNotification("error", "Please fill all the fields");
      return;
    }
    if (!validateUsername(username)) {
      showNotification("error", "Username is invalid");
      return;
    }
    if (!validatePassword(password)) {
      showNotification("error", "Password is too weak");
      return;
    }
    if (!validateEmail(email)) {
      showNotification("error", "Please enter a valid email");
      return;
    }
    if (password.includes(" ")) {
      showNotification("error", "Password cannot contain spaces");
      return;
    }
  };
  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  };
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>SignUp</h2>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="toggle-link">
            <h2>Already have an account ?</h2>
            <p>Sign in and discover great amount of new opportunities!</p>
            <Link to="/login">
              <button className="sign-up-btn">SIGN IN</button>
            </Link>
          </div>
        </form>

        {notification.show && (
          <Notification
            type={notification.type}
            message={notification.message}
            onClose={() =>
              setNotification({ show: false, type: "", message: "" })
            }
          />
        )}
      </div>
    </>
  );
};

export default Signup;
