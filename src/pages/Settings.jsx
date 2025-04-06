import React from "react";

const Settings = () => {
  return (
    <div className="main-content">
      <div className="container">
        <div className="container-header">
          <h2>
            {" "}
            <i className="fas fa-gear"></i>User Settings
          </h2>
        </div>
        <div className="settings-container">
          <div className="settings-section">
            <h3>Account Settings</h3>
            <div className="setting-item form-group">
              <label>
                <i className="fas fa-user"></i> Username:
              </label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="setting-item form-group">
              <label>
                <i className="fas fa-envelope"></i> Email:
              </label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="setting-item form-group">
              <label>
                <i className="fas fa-lock"></i> Password:
              </label>
              <input type="password" id="password" name="password" />
            </div>
          </div>

          <div className="settings-section">
            <h3>Appearance</h3>
            <div className="setting-item form-group">
              <label>
                <i className="fas fa-palette"></i> Theme:
              </label>
              <select id="theme" name="theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
              <label>
                <i className="fas fa-money"></i>Currency
              </label>
              <select name="currency" id="currency">
                <option value="KES">KES</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
          <div className="budget-settings">
            <h3>Budget Settings</h3>
            <div className="setting-item form-group">
              <label>
                <i className="fas fa-calender"></i>Default Budget Period
              </label>
              <select name="budgetPeriod" id="budgetPeriod">
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              <label htmlFor="">Customise categories</label>
              <input type="text" /> <button className="btn-primary">+</button>
            </div>
          </div>
        </div>
        <button type="submit" className="btn-primary" id="btn-save">
          Save Changes
        </button>
        <button type="reset" className="btn-primary" id="btn-cancel">
          Cancel
        </button>
        <button type="submit" className="btn-primary" id="btn-reset">
          Reset to Defaults
        </button>{" "}
      </div>
    </div>
  );
};

export default Settings;
