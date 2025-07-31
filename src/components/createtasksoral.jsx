import React, { useState, useEffect } from 'react';

const CreateTasksOral = ({ onClose, onCreate, taskToEdit, onUpdate }) => {
  const [taskData, setTaskData] = useState({
    methodology: '',
    assigned: '',
    task: '',
    dateCreated: '',
    dueDate: '',
    time: '',
    projectPhase: '',
    revisionNo: '',
    status: '',
  });

  useEffect(() => {
    if (taskToEdit) {
      setTaskData(taskToEdit); // Populate form with task data if editing
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      onUpdate(taskData); // Update the task if editing
    } else {
      onCreate(taskData); // Create a new task if not editing
    }
    onClose(); // Close the modal after creating or updating
  };

  return (
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <h2>{taskToEdit ? 'Edit Task' : 'Create New Task'}</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyles}>
            <label>Methodology</label>
            <input
              type="text"
              name="methodology"
              value={taskData.methodology}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyles}>
            <label>Assigned</label>
            <input
              type="text"
              name="assigned"
              value={taskData.assigned}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyles}>
            <label>Task</label>
            <input
              type="text"
              name="task"
              value={taskData.task}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyles}>
            <label>Date Created</label>
            <input
              type="date"
              name="dateCreated"
              value={taskData.dateCreated}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyles}>
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyles}>
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={taskData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyles}>
            <label>Project Phase</label>
            <input
              type="text"
              name="projectPhase"
              value={taskData.projectPhase}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyles}>
            <label>Revision No</label>
            <input
              type="text"
              name="revisionNo"
              value={taskData.revisionNo}
              onChange={handleChange}
            />
          </div>
          <div style={formGroupStyles}>
            <label>Status</label>
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              required
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div style={buttonGroupStyles}>
            <button type="submit" style={buttonStyle}>
              {taskToEdit ? 'Update Task' : 'Create Task'}
            </button>
            <button type="button" onClick={onClose} style={cancelButtonStyle}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Modal styles
const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '400px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const formGroupStyles = {
  marginBottom: '10px',
};

const buttonGroupStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const cancelButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#e74c3c',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default CreateTasksOral;
