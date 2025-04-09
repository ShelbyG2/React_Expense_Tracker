import React, { useState } from "react";
import Notification from "../components/Notification";
import "../styles/pages/budgets.css";

const Budgets = () => {
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString({
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  console.log(formattedDate);
  const [budgets, setBudgets] = useState({
    transportation: {
      id: 1,
      frequency: "Monthly",
      date: formattedDate,
      amount: 30,
    },
    entertainment: {
      id: 2,
      frequency: "Daily",
      date: formattedDate,
      amount: 70,
    },
    food: { id: 3, frequency: "Weekly", date: formattedDate, amount: 100 },
  });

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const frequency = form.frequency.value;
    const category = form.category.value;
    const amount = Number(form.amount.value);

    if (frequency === "" || category === "" || amount === "") {
      showNotification("error", "Please fill in all fields");
      return;
    }

    setBudgets((prev) => ({
      ...prev,
      [category]: amount,
    }));

    showNotification("success", "Budget added successfully");
    form.reset();
    setShowModal(false);
  };
  const handleDelete = (category) => {
    try {
      setBudgets((prev) => {
        const updatedBudgets = { ...prev };
        delete updatedBudgets[category];
        return updatedBudgets;
      });

      showNotification("success", "Budget deleted successfully");
    } catch (error) {
      showNotification("error", "Failed to delete budget");
    }
  };
  return (
    <div className="main-content">
      <div className="container">
        <div className="container-header">
          <h1>
            <i className="fas fa-receipt"></i> Budget Management
          </h1>
          <button className="btn-primary" onClick={() => setShowModal(true)}>
            + ADD BUDGET
          </button>
        </div>
        {notification.show && (
          <Notification
            type={notification.type}
            message={notification.message}
            onClose={() =>
              setNotification({ show: false, type: "", message: "" })
            }
          />
        )}
        <div className="budget-list">
          {Object.keys(budgets).map((category) => (
            <div key={category} className="budget-item">
              <div className="budget-category">
                <i className="fas fa-tag"></i>
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              </div>{" "}
              <div className="budget-date">{budgets[category].date}</div>
              <p className="budget-amount">
                Amount: KES {budgets[category].amount || budgets[category]}
              </p>
              <button
                className="delete-btn"
                onClick={() => handleDelete(category)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
        {showModal && (
          <div className="modal-background">
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Add New Budget</h2>
                  <button
                    className="close-btn"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="frequency">
                      <i className="fas fa-calendar-alt"></i> Frequency:
                    </label>
                    <select id="frequency" name="frequency">
                      <option value="">Select a Frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">
                      <i className="fas fa-tag"></i> Category:
                    </label>
                    <select id="category" name="category">
                      <option value="">Select a Category</option>
                      <option value="transportation">Transportation</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="food">Food</option>
                    </select>
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
                    <i className="fas fa-plus"></i>
                    ADD BUDGET
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Budgets;
