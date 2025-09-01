// src/components/pm-tasks-record/pm-tasks-record.jsx

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Added for navigation
import taskIcon from "../../assets/tasks-record-icon.png";
import recordIcon from "../../assets/records-icon.png";

export default function PMTasksRecord() {
  const [status, setStatus] = useState("To Review");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const statusDropdownRef = useRef(null);
  const navigate = useNavigate();  // Added hook for navigation

  const STATUS_OPTIONS = ["To Do", "In Progress", "To Review", "Missed"];

  const getStatusColor = (value) => {
    switch (value) {
      case "To Do":
        return "#FABC3F";
      case "In Progress":
        return "#809D3C";
      case "To Review":
        return "#578FCA";
      case "Missed":
        return "#D32F2F";
      default:
        return "#ccc";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target)
      ) {
        setShowStatusDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCardClick = (path) => {
    navigate(path); // Navigate to the specific path
  };

  return (
    <div className="tasks-record-wrapper">
      <h2 className="section-title">
        <img 
          src={taskIcon} 
          alt="Tasks Record Icon" 
          className="section-icon" 
        />
        Tasks Record
      </h2>
      <hr className="divider" />

      <div className="tasks-record-container">
        {/* Title Defense Card */}
        <div className="task-card" onClick={() => handleCardClick('/title-tasks-record')}>
          <div className="task-card-icon">
            <img src={recordIcon} alt="Title Defense Icon" className="card-icon" />
          </div>
          <div className="task-card-header">
            <h3 className="task-title">Title<br /> Defense</h3>
          </div>
        </div>

        {/* Oral Defense Card */}
        <div className="task-card" onClick={() => handleCardClick('/oral-tasks-record')}>
          <div className="task-card-icon">
            <img src={recordIcon} alt="Oral Defense Icon" className="card-icon" />
          </div>
          <div className="task-card-header">
            <h3 className="task-title">Oral<br /> Defense</h3>
          </div>
        </div>

        {/* Final Defense Card */}
        <div className="task-card" onClick={() => handleCardClick('/final-tasks-record')}>
          <div className="task-card-icon">
            <img src={recordIcon} alt="Final Defense Icon" className="card-icon" />
          </div>
          <div className="task-card-header">
            <h3 className="task-title">Final<br /> Defense</h3>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        * { box-sizing: border-box; }
        .tasks-record-wrapper {
          width: 100%;
          padding: 40px 20px;
          background: #fff;
          border-radius: 10px;
        }

        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #3B0304;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .divider {
          border: none;
          border-top: 2px solid #3B0304;
          margin-bottom: 20px;
        }

        .tasks-record-container {
          display: flex;
          gap: 20px;
          justify-content: left;
          flex-wrap: wrap;
        }

        .task-card {
          background: #ffffff;
          border: 1px solid #B2B2B2;
          border-radius: 8px;
          width: 150px;  
          height: 200px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          cursor: pointer;
          position: relative;
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .task-card-icon {
          margin-bottom: 10px;
        }

        .card-icon {
          width: 50px; 
          height: 50px;
          object-fit: contain;
        }

        .task-card-header {
          font-size: 14px;
          font-weight: bold;
          color: #3B0304;
        }

        .task-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 22px;
          height: 100%;
          background-color: #3B0304;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }

        .task-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 22px; 
          background-color: #3B0304; 
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        .task-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .task-title {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
