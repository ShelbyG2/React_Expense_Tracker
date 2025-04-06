import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/nav.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="profileInfo">
          <i className="fas fa-user"></i>
          <h3>John Doe </h3>
          <p>john.doe@example.com</p>
        </div>
        <ul>
          <li>
            <Link to="/">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/expenses">
              <span>
                <i className="fa-solid fa-money-bill"></i>
              </span>
              Expenses
            </Link>
          </li>
          <li>
            <Link to="/budgets">
              <span>
                <i className="fa-solid fa-piggy-bank"></i>
              </span>
              Budget
            </Link>
          </li>
          <li>
            <Link to="/analytics">
              <span>
                <i className="fa-solid fa-chart-pie"></i>
              </span>
              Analytics & Reports
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <span>
                <i className="fa-solid fa-gear"></i>
              </span>
              Settings
            </Link>
          </li>
          <li>
            <Link to="/reminders">
              <span>
                <i className="fas fa-bell"></i>
              </span>{" "}
              Reminders
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <span>
                <i className="fa-solid fa-right-from-bracket"></i>
              </span>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
