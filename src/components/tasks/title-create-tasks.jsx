import React, { useState, useEffect, useRef } from "react";
import redDropdownIcon from "../../assets/red-dropdown-icon.png";
import blackCreateTasksIcon from "../../assets/black-create-tasks-icon.png";
import attachmentIcon from "../../assets/attachment-icon.png";
import exitIcon from "../../assets/exit-icon.png";

const METHODOLOGY_OPTIONS = [
  "Agile",
  "Extreme Programming",
  "JAD",
  "RAD",
  "Prototyping",
];

const TASK_OPTIONS = [
  "Brainstorming",
  "Capstone Meeting",
  "Title Defense",
];

const ASSIGNED_OPTIONS = [
  "Julliana Castaneda",
  "Harzwel Zhen Lacson",
  "Alejandro Faustino",
];

const TitleCreateTasks = ({ onClose, onCreate, taskToEdit, onUpdate }) => {
  const [formData, setFormData] = useState({
    methodology: "",
    projectPhase: "",
    task: "",
    dueDate: "",
    time: "",
    assigned: "",
    comment: "",
  });

  const [showMethodologyDropdown, setShowMethodologyDropdown] = useState(false);
  const [showTaskDropdown, setShowTaskDropdown] = useState(false);
  const [showAssignedDropdown, setShowAssignedDropdown] = useState(false);

  const mRef = useRef(null);
  const tRef = useRef(null);
  const aRef = useRef(null);

  useEffect(() => {
    if (taskToEdit) {
      setFormData({
        methodology: taskToEdit.methodology || "",
        projectPhase: taskToEdit.projectPhase || "",
        task: taskToEdit.task || "",
        dueDate: taskToEdit.dueDate || "",
        time: taskToEdit.time || "",
        assigned: taskToEdit.assigned || "",
        comment: taskToEdit.comment || "",
      });
    }
  }, [taskToEdit]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mRef.current && !mRef.current.contains(e.target)) {
        setShowMethodologyDropdown(false);
      }
      if (tRef.current && !tRef.current.contains(e.target)) {
        setShowTaskDropdown(false);
      }
      if (aRef.current && !aRef.current.contains(e.target)) {
        setShowAssignedDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      onUpdate({ ...taskToEdit, ...formData });
    } else {
      onCreate({ id: Date.now(), ...formData });
    }
    onClose();
  };

  return (
    <>
      {/* Overlay without click handler so clicking outside won't close */}
      <div className="modal-overlay" />

      <div className="modal-container" role="dialog" aria-modal="true">
        <div className="header-container">
          {/* Left side: icon + title */}
          <div className="header-left">
            <img
              src={blackCreateTasksIcon}
              alt="Create Task Icon"
              className="header-icon"
            />
            <h2 className="header-title">
              {taskToEdit ? "Edit Task" : "Create Task"}
            </h2>
          </div>

          {/* Right side: exit icon */}
          <img
            src={exitIcon}
            alt="Exit"
            className="exit-icon"
            onClick={onClose}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onClose();
              }
            }}
          />
        </div>

        <hr className="header-divider" />

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Methodology */}
            <div className="form-field with-icon" ref={mRef}>
              <label>Methodology</label>
              <input
                type="text"
                value={formData.methodology}
                readOnly
                onClick={() => setShowMethodologyDropdown(!showMethodologyDropdown)}
                required
              />
              <img
                src={redDropdownIcon}
                className="dropdown-icon"
                alt="Dropdown Icon"
              />
              {showMethodologyDropdown && (
                <div className="dropdown-menu">
                  {METHODOLOGY_OPTIONS.map((option) => (
                    <div
                      key={option}
                      className="dropdown-item"
                      onClick={() => {
                        handleChange("methodology", option);
                        setShowMethodologyDropdown(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Phase */}
            <div className="form-field">
              <label>Project Phase</label>
              <input
                type="text"
                value={formData.projectPhase}
                onChange={(e) => handleChange("projectPhase", e.target.value)}
                required
              />
            </div>

            {/* Task */}
            <div className="form-field with-icon" ref={tRef}>
              <label>Task</label>
              <input
                type="text"
                value={formData.task}
                readOnly
                onClick={() => setShowTaskDropdown(!showTaskDropdown)}
                required
              />
              <img
                src={redDropdownIcon}
                className="dropdown-icon"
                alt="Dropdown Icon"
              />
              {showTaskDropdown && (
                <div className="dropdown-menu">
                  {TASK_OPTIONS.map((option) => (
                    <div
                      key={option}
                      className="dropdown-item"
                      onClick={() => {
                        handleChange("task", option);
                        setShowTaskDropdown(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Due Date */}
            <div className="form-field">
              <label>Due Date</label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => handleChange("dueDate", e.target.value)}
                required
              />
            </div>

            {/* Time */}
            <div className="form-field">
              <label>Time</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                required
              />
            </div>

            {/* Assigned */}
            <div className="form-field with-icon assigned-field-wrapper" ref={aRef}>
              <label>Assigned</label>
              <input
                type="text"
                value={formData.assigned}
                readOnly
                onClick={() => setShowAssignedDropdown(!showAssignedDropdown)}
                required
              />
              <img
                src={redDropdownIcon}
                className="dropdown-icon"
                alt="Dropdown Icon"
              />
              {showAssignedDropdown && (
                <div className="dropdown-menu">
                  {ASSIGNED_OPTIONS.map((option) => (
                    <div
                      key={option}
                      className="dropdown-item"
                      onClick={() => {
                        handleChange("assigned", option);
                        setShowAssignedDropdown(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Assigned Box */}
            <div className="assigned-box-wrapper" />

            {/* Comment */}
            <div className="form-comment-wrapper">
              <label>Leave a Comment</label>
              <textarea
                value={formData.comment}
                onChange={(e) => handleChange("comment", e.target.value)}
              />
              <div className="attachment-placeholder">
                <img
                  src={attachmentIcon}
                  alt="Attach"
                  className="attachment-icon"
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              {taskToEdit ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0,0,0,0.5);
          z-index: 1000;
        }

        .modal-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 16px;
          padding: 48px 80px 48px 80px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          width: 880px;
          max-width: 95vw;
          max-height: 95vh;
          overflow: auto;
          z-index: 1001;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #3B0304;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .header-icon {
          width: 18px;
          height: 18px;
        }

        .header-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }

        .exit-icon {
          width: 18px;
          height: 18px;
          cursor: pointer;
          user-select: none;
        }

        .header-divider {
          border: none;
          border-bottom: 2px solid #3B0304;
          width: 100%;
          margin-bottom: 24px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 24px;
          flex-grow: 1;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto auto;
          gap: 24px 32px;
          position: relative;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        label {
          margin-bottom: 6px;
          font-weight: 600;
          font-size: 14px;
        }

        input[type="text"],
        input[type="date"],
        input[type="time"] {
          padding: 6px 10px;
          border: 1px solid #3B0304;
          border-radius: 8px;
          font-size: 14px;
          color: #3B0304;
          font-weight: 500;
          outline-offset: 2px;
          height: 32px;
          box-sizing: border-box;
          width: 100%;
        }

        input:focus {
          border-color: #8B0000;
          box-shadow: 0 0 6px #8B0000;
        }

        .with-icon {
          position: relative;
        }

        .dropdown-icon {
          position: absolute;
          right: 10px;
          top: 34px;
          width: 12px;
          height: 12px;
          pointer-events: none;
        }

        /* Assigned field and box wrapper */
        .assigned-field-wrapper {
          grid-column: 3 / 4;
          grid-row: 2 / 3;
          display: flex;
          flex-direction: column;
        }

        .assigned-box-wrapper {
          grid-column: 3 / 4;
          grid-row: 3 / 4;
          margin-top: 8px;
          height: 96px;
          border: 1px solid #3B0304;
          border-radius: 8px;
          width: 100%;
          background-color: white;
          box-sizing: border-box;
        }

        /* Comment wrapper */
        .form-comment-wrapper {
          grid-column: 1 / 3;
          grid-row: 3 / 4;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          height: 136px;
        }

        .form-comment-wrapper label {
          margin-bottom: 6px;
          font-weight: 600;
          font-size: 14px;
        }

        .form-comment-wrapper textarea {
          resize: none;
          padding: 10px;
          font-size: 14px;
          border-radius: 8px;
          border: 1px solid #3B0304;
          color: #3B0304;
          font-family: inherit;
          flex-grow: 1;
          box-sizing: border-box;
          width: 100%;
          height: 96px;
        }

        .attachment-placeholder {
          margin-top: 6px;
          user-select: none;
        }

        .attachment-icon {
          width: 20px;
          height: 20px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 24px;
        }

        .btn-submit {
          background-color: #3B0304;
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px 28px;
          cursor: pointer;
          font-weight: 700;
          font-size: 16px;
          transition: background-color 0.2s ease-in-out;
        }

        .btn-submit:hover {
          background-color: #571212;
        }
      `}</style>
    </>
  );
};

export default TitleCreateTasks;
