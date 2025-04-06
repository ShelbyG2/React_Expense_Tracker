import React, { useState } from "react";

const SavingGoals = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="main-content">
      <div className="container">
        <div className="container-header">
          <h2>
            {" "}
            <i className="fas fa-pigg-bank"></i> Saving Goals
          </h2>
          <button className="btn-primary" onClick={() => setShowModal(true)}>
            <i className="fas fa-plus"></i>
            Add goal
          </button>
        </div>
        <div className="saving-goals-container">
          <table>
            <thead>
              <tr>
                <th>Goal Name</th>
                <th>Target Amount</th>
                <th>Current Amount</th>
                <th>Progress</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Travel</td>
                <td>$1000</td>
                <td>$500</td>
                <td>50%</td>
                <td>
                  <button className="btn-secondary">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="delete-btn">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Add New Goal</h2>
                <button
                  className="close-btn"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="goal-name">Goal Name:</label>
                  <input type="text" id="goal-name" name="goal-name" />
                </div>
                <div className="form-group">
                  <label htmlFor="current-amount">Current Amount:</label>
                  <input
                    type="number"
                    id="current-amount"
                    name="current-amount"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="target-amount">Target Amount:</label>
                  <input
                    type="number"
                    id="target-amount"
                    name="target-amount"
                  />
                </div>
                <div className="form-group">
                  ,<label htmlFor="category">Category</label>
                  <select id="category" name="category">
                    <option value="">Select a Category</option>
                    <option value="transportation">Transportation</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="food">Food</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="deadline">Deadline:</label>
                  <input type="date" id="deadline" name="deadline" />
                </div>
                <button type="submit" className="btn-primary">
                  <i className="fas fa-plus"></i>
                  Add Goal
                </button>
                <button type="reset" className="btn-cancel btn-primary">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavingGoals;
