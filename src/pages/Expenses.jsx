import React, { useState } from "react";
import Notification from "../components/Notification";
import "../styles/pages/expenses.css";

const Expenses = () => {
  const [showModal, setShowModal] = useState(false);

  const [notification, setNotification] = useState({
    message: "",
    type: "",
    show: false,
  });

  const [expenses, setExpenses] = useState({
    transportation: [
      { id: 1, date: "3/19/2025", description: "tuktuk", amount: 30 },
      { id: 2, date: "3/4/2025", description: "No description", amount: 70 },
    ],
    entertainment: [
      { id: 3, date: "3/15/2025", description: "hike", amount: 100 },
    ],
    food: [
      { id: 4, date: "3/12/2025", description: "mayai", amount: 45 },
      { id: 5, date: "3/3/2025", description: "kitunguu", amount: 60 },
      { id: 6, date: "2/28/2025", description: "nyanya", amount: 50 },
    ],
  });
  const showNotification = (type, message) => {
    setNotification({ message, type, show: true });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const amount = Number(e.target.amount.value);

    if (!date || !description || !category || !amount) {
      showNotification("error", "Please fill in all fields");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      showNotification("error", "Please enter a valid amount");
      return;
    }

    setExpenses((prev) => ({
      ...prev,
      [category]: [
        ...prev[category],
        { id: prev[category].length + 1, date, description, amount },
      ],
    }));

    showNotification("success", "Expense added successfully");
    e.target.reset();
    setShowModal(false);
  };
  const handleDelete = (category, id) => {
    setExpenses((prev) => ({
      ...prev,
      [category]: prev[category].filter((expense) => expense.id !== id),
    }));
    showNotification("success", "Expense deleted successfully");
  };

  const calculateTotal = (expenses) => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <div className="main-content">
      <div className="container ">
        <div className="container-header">
          <h1>
            <i className="fas fa-receipt"></i> Expense Management
          </h1>
          <button className="btn-primary" onClick={() => setShowModal(true)}>
            +ADD EXPENSE
          </button>
        </div>

        {/* Dynamic Expense Categories */}
        {Object.keys(expenses).map((category) => (
          <div key={category} className="expense-category">
            <div className="category-header">
              <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <div className="category-stats">
                <span>
                  {expenses[category].length}{" "}
                  {expenses[category].length === 1 ? "expense" : "expenses"}
                </span>
                <span>Total: KES {calculateTotal(expenses[category])}</span>
              </div>
            </div>
            {expenses[category].map((expense) => (
              <div key={expense.id} className="expense-item">
                <div className="expense-date">{expense.date}</div>
                <div className="expense-description">{expense.description}</div>
                <div className="expense-amount">
                  KES {expense.amount}
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(category, expense.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Add Expense Modal */}
        {showModal && (
          <div className="modal-background">
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Add New Expense</h2>
                  <button
                    className="close-btn"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="date">
                      <i className="far fa-calendar"></i> Date:
                    </label>
                    <input type="date" id="date" name="date" />
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
                    ADD EXPENSE
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
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
    </div>
  );
};

export default Expenses;
