import React, { useState } from "react";
import Notification from "../components/Notification";

const Analytics = () => {
  const [notifications, setNotifications] = useState([]);
  const exportFormats = ["pdf", "excel"];
  const [selectedFormat, setSelectedFormat] = useState(exportFormats[0]);

  const handleExport = (format) => {
    try {
      if (!exportFormats.includes(format)) {
        throw new Error(`Unsupported export format: ${format}`);
      }

      // Simulating export process
      const notification = {
        message: `Exporting to ${format} format...`,
        type: "success",
      };
      setNotifications([...notifications, notification]);

      // Simulating an async export process
      setTimeout(() => {
        const completionNotification = {
          message: `Successfully exported to ${format}`,
          type: "success",
        };
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          completionNotification,
        ]);
      }, 2000);
    } catch (error) {
      const errorNotification = {
        message: error.message || `Failed to export to ${format}`,
        type: "error",
      };
      setNotifications([...notifications, errorNotification]);
    }
  };
  return (
    <div className="main-content">
      <div className="container">
        <div className="container-header">
          <h1>
            <i className="fas fa-chart-pie"></i>Analytics
          </h1>
          <h2>Export Report</h2>

          <button className="btn-secondary" id="pdf-btn" onClick={handleExport}>
            <i className="fas fa-file-pdf"></i>Export to pdf
          </button>
          <button
            className="btn-secondary"
            id="excel-btn"
            onClick={handleExport}
          >
            <i className="fas fa-file-excel"></i>Export to excel
          </button>
        </div>
        <div className="chart-container">
          <div className="trend-chart">
            <h3>Monthly Expense Trend</h3>
            <canvas id="monthlyExpenseChart"></canvas>
          </div>
          <div className="comparison-chart">
            <h3>Budget vs Expense by Category</h3>
            <canvas id="budgetExpenseChart"></canvas>
          </div>
        </div>
      </div>
      <Notification notifications={notifications} />
    </div>
  );
};

export default Analytics;
