import React, { useState } from "react";

const Reminders = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="main-content">
      <div className="container">
        <div className="container-header">
          <h2>Reminders</h2>
          <button className="btn-primary" onClick={() => setShowModal(true)}>
            <i className="fas fa-plus"></i> Add Reminder
          </button>
        </div>
        <div className="reminders-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/01/2023</td>
                <td>Buy groceries</td>
                <td>$100</td>
                <td>
                  {" "}
                  <button className="btn-secondary">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="delete-btn">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>01/05/2023</td>
                <td>Pay rent</td>
                <td>$500</td>
                <td>
                  {" "}
                  <button className="btn-secondary">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="delete-btn">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>01/10/2023</td>
                <td>Call mom</td>
                <td>$20</td>
                <td>
                  {" "}
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
              {" "}
              <div className="modal-header">
                {" "}
                <h2>Add Reminder</h2>
                <button
                  className="close-btn"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="date">
                    <i className="far fa-calendar"></i> Due Date:
                  </label>
                  <input type="date" id="due-date" name="due-date" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">
                    <i className="fas fa-pen"></i> Description:
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Enter description"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">
                    <i className="fas fa-money-bill"></i> Amount:
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Enter amount"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  ADD REMINDER
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

export default Reminders;
