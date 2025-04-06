import React from "react";

const dashboard = () => {
  return (
    <div className="main-content">
      <h1>Finance tracker</h1>
      <div className="container ">
        <div className="cards-container">
          <div className="card">
            <i className="fa-solid fa-money-bill"></i>
            <h3>Monthly Income</h3>
            <p>1000</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-money-bill-trend-up"></i>
            <h3>Total Expenses</h3>
            <p>KES 2000</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-piggy-bank"></i>
            <h3>Total Budgeted</h3>
            <p>KES 5000</p>
          </div>
          <div className="card">
            <i className="fas fa-wallet"></i>
            <h3>Remaining Budget</h3>
            <p>KES 5000</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Total Savings</h3>
            <p>KES 5000</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pieChart">
          <h3>Expenses by Category</h3>
          <div className="chart"></div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
