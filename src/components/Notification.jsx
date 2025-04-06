import React, { useState, useEffect } from "react";
import "../styles/components/notifications.css";

const Notification = ({
  type = "info",
  message,
  duration = 3000,
  onClose,
  position = "top-right",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <i className="fas fa-check-circle"></i>;
      case "error":
        return <i className="fas fa-times-circle"></i>;
      case "warning":
        return <i className="fas fa-exclamation-circle"></i>;
      default:
        return <i className="fas fa-info-circle"></i>;
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`notification ${type} ${position} ${isVisible ? "show" : ""}`}
    >
      <div className="notification-icon">{getIcon()}</div>
      <div className="notification-content">{message}</div>
      <button
        className="notification-close"
        onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default Notification;
