import React, { useState, useEffect, useRef } from "react";
import redDropdownIcon from "../../assets/red-dropdown-icon.png";
import blackCreateTasksIcon from "../../assets/black-create-tasks-icon.png";
import attachmentIcon from "../../assets/attachment-icon.png";
import exitIcon from "../../assets/exit-icon.png";

const METHODOLOGY_OPTIONS = ["Agile", "Extreme Programming", "JAD", "RAD", "Prototyping"];

const TASK_CATEGORIES = {
  Documentation: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"],
  "Discussion & Review": ["Brainstorming", "Capstone Meeting", "Adviser Consultation", "Mock Defense"],
};

const SUBTASKS_OPTIONS = ["Research", "Design", "Implementation", "Testing", "Deployment"];
const ELEMENTS_OPTIONS = ["UI", "Backend", "Database", "API", "Documentation"];
const ASSIGNED_OPTIONS = ["Julliana Castaneda", "Harzwel Zhen Lacson", "Alejandro Faustino"];

const FinalCreateTasks = ({ onClose, onCreate, taskToEdit, onUpdate }) => {
  const [formData, setFormData] = useState({
    methodology: "",
    projectPhase: "",
    taskCategory: "", // new field to track selected task category
    task: "",
    subtasks: "",
    elements: "",
    dueDate: "",
    time: "",
    assignedInput: "", // input for assigned to field
    assigned: [], // array for multi-selected assigned names
    comment: "",
  });

  const [showMethodologyDropdown, setShowMethodologyDropdown] = useState(false);
  const [showTaskDropdown, setShowTaskDropdown] = useState(false);
  const [showSubtasksDropdown, setShowSubtasksDropdown] = useState(false);
  const [showElementsDropdown, setShowElementsDropdown] = useState(false);
  const [showAssignedDropdown, setShowAssignedDropdown] = useState(false);

  // Refs for outside click handling
  const mRef = useRef(null);
  const tRef = useRef(null);
  const stRef = useRef(null);
  const elRef = useRef(null);
  const aRef = useRef(null);

  // ... (rest of the code will come in the next parts)
  useEffect(() => {
    const styleId = "final-create-tasks-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
 .modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 16px;
  padding: 48px 80px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  width: 880px;
  max-width: 95vw;
  max-height: 95vh;
  overflow: auto;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  color: #3B0304;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
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
  margin: 0;
  font-size: 18px;
  font-weight: 600;
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
  margin: 0 0 24px 0;
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto auto;
  gap: 24px 32px;
}

.form-field.time-field {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.assigned-field-wrapper {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}

.assigned-box-wrapper {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  margin-top: 8px;
  height: 96px;
  border: 1px solid #3B0304;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 8px;
  overflow-y: auto;
}

.form-comment-wrapper {
  grid-column: 1 / 4;
  grid-row: 4 / 5;
  display: flex;
  flex-direction: column;
  height: 136px;
}

.attachment-placeholder {
  margin-top: 6px;
  display: flex;
  align-items: center;
}

.attachment-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}

.btn-submit {
  background-color: #3B0304;
  color: white;
  border: none;
  border-radius: 14px;
  padding: 14px 28px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn-submit:hover {
  background-color: #571212;
}

.form-field {
  display: flex;
  flex-direction: column;
  position: relative;
}

label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
}

input[type="text"],
input[type="date"],
input[type="time"],
textarea {
  border: 1px solid #3B0304;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 14px;
  color: #3B0304;
  box-sizing: border-box;
  width: 100%;
}

input[type="text"],
input[type="date"],
input[type="time"] {
  height: 32px;
}

textarea {
  height: 96px;
  resize: none;
}

input:focus,
textarea:focus {
  border-color: #8B0000;
  box-shadow: 0 0 6px #8B0000;
  outline: none;
}

.with-icon {
  position: relative;
}

.dropdown-icon {
  position: absolute;
  top: 34px;
  right: 10px;
  width: 12px;
  height: 12px;
  pointer-events: none;
}

.dropdown-menu {
  position: absolute;
  background: white;
  border: 1px solid #3B0304;
  border-radius: 8px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  top: 40px;
  left: 0;
  box-sizing: border-box;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #3B0304;
}

.dropdown-item:hover {
  background-color: #f0d9d9;
  color: #8B0000;
}
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mRef.current && !mRef.current.contains(e.target)) {
        setShowMethodologyDropdown(false);
      }
      if (tRef.current && !tRef.current.contains(e.target)) {
        setShowTaskDropdown(false);
      }
      if (stRef.current && !stRef.current.contains(e.target)) {
        setShowSubtasksDropdown(false);
      }
      if (elRef.current && !elRef.current.contains(e.target)) {
        setShowElementsDropdown(false);
      }
      if (aRef.current && !aRef.current.contains(e.target)) {
        setShowAssignedDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Input change handler
  const handleInputChange = (field) => (e) => {
    const value = e.target.value;

    if (field === "methodology") {
      // Auto-fill Project Phase if Agile
      if (value === "Agile") {
        setFormData((prev) => ({
          ...prev,
          methodology: value,
          projectPhase: "Design",
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          methodology: value,
          projectPhase: "",
        }));
      }
    } else if (field === "assignedInput") {
      setFormData((prev) => ({ ...prev, assignedInput: value }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };
  // Handle task category selection
  const handleTaskCategorySelect = (category) => {
    setFormData((prev) => ({
      ...prev,
      taskCategory: category,
      task: "",
    }));
  };

  // Clear selected task category
  const clearTaskCategory = () => {
    setFormData((prev) => ({
      ...prev,
      taskCategory: "",
      task: "",
    }));
  };

  // Handle task sub-option selection
  const handleTaskSelect = (taskName) => {
    setFormData((prev) => ({
      ...prev,
      task: taskName,
    }));
    setShowTaskDropdown(false);
  };

  // Handle single dropdown selections
  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setShowMethodologyDropdown(false);
    setShowSubtasksDropdown(false);
    setShowElementsDropdown(false);
  };

  // Add assigned person to list
  const handleAssignedSelect = (name) => {
    if (!formData.assigned.includes(name)) {
      setFormData((prev) => ({
        ...prev,
        assigned: [...prev.assigned, name],
        assignedInput: "",
      }));
    }
    setShowAssignedDropdown(false);
  };

  // Remove assigned person
  const handleRemoveAssigned = (name) => {
    setFormData((prev) => ({
      ...prev,
      assigned: prev.assigned.filter((n) => n !== name),
    }));
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      assigned: formData.assigned,
    };
    if (taskToEdit) {
      onUpdate && onUpdate(finalData);
    } else {
      onCreate && onCreate(finalData);
    }
  };
  return (
    <>
      <div className="modal-overlay" onClick={onClose} />

      <form className="modal-container" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="header-container">
          <div className="header-left">
            <img className="header-icon" src={blackCreateTasksIcon} alt="Create Tasks" />
            <h3 className="header-title">{taskToEdit ? "Edit Task" : "Create Task"}</h3>
          </div>
          <img src={exitIcon} alt="Exit" className="exit-icon" onClick={onClose} />
        </div>

        <hr className="header-divider" />

        {/* Form Grid */}
        <div className="form-grid">
          {/* Methodology Dropdown */}
          <div className="form-field with-icon" ref={mRef}>
            <label htmlFor="methodology">Methodology</label>
            <input
              type="text"
              id="methodology"
              value={formData.methodology}
              onClick={() => setShowMethodologyDropdown(!showMethodologyDropdown)}
              readOnly
              placeholder="Select methodology"
            />
            <img className="dropdown-icon" src={redDropdownIcon} alt="dropdown" />
            {showMethodologyDropdown && (
              <div className="dropdown-menu">
                {METHODOLOGY_OPTIONS.map((option) => (
                  <div key={option} className="dropdown-item" onClick={() => handleSelect("methodology", option)}>
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project Phase */}
          <div className="form-field">
            <label htmlFor="projectPhase">Project Phase</label>
            <input
              type="text"
              id="projectPhase"
              value={formData.projectPhase}
              onChange={handleInputChange("projectPhase")}
              readOnly={formData.methodology === "Agile"}
              
            />
          </div>

          {/* Task Field Dropdown */}
          <div className="form-field with-icon" ref={tRef}>
            <label htmlFor="task">Task</label>
            <input
              type="text"
              id="task"
              value={formData.task}
              onClick={() => setShowTaskDropdown(!showTaskDropdown)}
              readOnly
              placeholder="Select task"
            />
            <img className="dropdown-icon" src={redDropdownIcon} alt="dropdown" />
            {showTaskDropdown && (
              <div className="dropdown-menu" style={{ maxHeight: "220px" }}>
                {!formData.taskCategory ? (
                  <>
                    {Object.keys(TASK_CATEGORIES).map((category) => (
                      <div
                        key={category}
                        className="dropdown-item"
                        onClick={() => handleTaskCategorySelect(category)}
                      >
                        {category}
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 12px",
                        backgroundColor: "#F9EDED",
                        fontWeight: "bold",
                        color: "#3B0304",
                      }}
                    >
                      <span>{formData.taskCategory}</span>
                      <span style={{ cursor: "pointer", color: "#8B0000" }} onClick={clearTaskCategory}>
                        ⓧ
                      </span>
                    </div>
                    {TASK_CATEGORIES[formData.taskCategory].map((task) => (
                      <div
                        key={task}
                        className="dropdown-item"
                        onClick={() => handleTaskSelect(task)}
                      >
                        {task}
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Subtasks Dropdown */}
          <div className="form-field with-icon" ref={stRef}>
            <label htmlFor="subtasks">Subtasks</label>
            <input
              type="text"
              id="subtasks"
              value={formData.subtasks}
              onClick={() => setShowSubtasksDropdown(!showSubtasksDropdown)}
              readOnly
              placeholder="Select subtasks"
            />
            <img className="dropdown-icon" src={redDropdownIcon} alt="dropdown" />
            {showSubtasksDropdown && (
              <div className="dropdown-menu">
                {SUBTASKS_OPTIONS.map((option) => (
                  <div key={option} className="dropdown-item" onClick={() => handleSelect("subtasks", option)}>
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Elements Dropdown */}
          <div className="form-field with-icon" ref={elRef}>
            <label htmlFor="elements">Elements</label>
            <input
              type="text"
              id="elements"
              value={formData.elements}
              onClick={() => setShowElementsDropdown(!showElementsDropdown)}
              readOnly
              placeholder="Select elements"
            />
            <img className="dropdown-icon" src={redDropdownIcon} alt="dropdown" />
            {showElementsDropdown && (
              <div className="dropdown-menu">
                {ELEMENTS_OPTIONS.map((option) => (
                  <div key={option} className="dropdown-item" onClick={() => handleSelect("elements", option)}>
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Due Date */}
          <div className="form-field">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              value={formData.dueDate}
              onChange={handleInputChange("dueDate")}
              placeholder="Select date"
            />
          </div>

          {/* Time */}
          <div className="form-field time-field">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={formData.time}
              onChange={handleInputChange("time")}
              placeholder="Select time"
            />
          </div>

          {/* Assigned To Multi-select Input */}
          <div className="form-field assigned-field-wrapper with-icon" ref={aRef}>
            <label htmlFor="assignedInput">Assigned</label>
            <input
              type="text"
              id="assignedInput"
              value={formData.assignedInput}
              onChange={handleInputChange("assignedInput")}
              onClick={() => setShowAssignedDropdown(!showAssignedDropdown)}
              placeholder="Select assignee"
            />
            <img className="dropdown-icon" src={redDropdownIcon} alt="dropdown" />
            {showAssignedDropdown && (
              <div className="dropdown-menu">
                {ASSIGNED_OPTIONS.filter((option) => !formData.assigned.includes(option)).map((option) => (
                  <div key={option} className="dropdown-item" onClick={() => handleAssignedSelect(option)}>
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Assigned List Box */}
          <div className="assigned-box-wrapper">
            <label>Assigned</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {formData.assigned.map((name) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#F9EDED",
                    borderRadius: "6px",
                    padding: "4px 8px",
                    fontSize: "13px",
                    color: "#3B0304",
                  }}
                >
                  <span style={{ cursor: "pointer", marginRight: "6px" }} onClick={() => handleRemoveAssigned(name)}>
                    ×
                  </span>
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Comment + Attachment */}
          <div className="form-field form-comment-wrapper">
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              value={formData.comment}
              onChange={handleInputChange("comment")}
              placeholder="Add comments here..."
            />
            <div className="attachment-placeholder" title="Attach file">
              <img src={attachmentIcon} alt="Attachment" className="attachment-icon" />
              <span style={{ marginLeft: "8px", fontSize: "14px", color: "#3B0304" }}></span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {taskToEdit ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </>
  );
};

export default FinalCreateTasks;
