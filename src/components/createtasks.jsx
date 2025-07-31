import React, { useState, useEffect } from 'react';

const CreateTasks = ({ onClose, onCreate, taskToEdit, onUpdate }) => {
  const [formData, setFormData] = useState({
    methodology: '',
    projectPhase: '',
    assigned: '',
    task: '',
    dueDate: '',
    time: '',
    revisionNo: '',
    status: '',
  });

  // If editing an existing task, populate form with current task data
  useEffect(() => {
    if (taskToEdit) {
      setFormData({
        methodology: taskToEdit.methodology || '',
        projectPhase: taskToEdit.projectPhase || '',
        assigned: taskToEdit.assigned || '',
        task: taskToEdit.task || '',
        dueDate: taskToEdit.dueDate || '',
        time: taskToEdit.time || '',
        revisionNo: taskToEdit.revisionNo || '',
        status: taskToEdit.status || '',
      });
    }
  }, [taskToEdit]);

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (either create or update task)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskToEdit) {
      // If editing, call the onUpdate function
      onUpdate({ ...taskToEdit, ...formData });
    } else {
      // If creating, call the onCreate function
      onCreate({
        id: Date.now(), // Generate a unique ID for the new task
        ...formData,
      });
    }

    // Close the modal after submission
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          minWidth: '300px',
        }}
      >
        <h2>{taskToEdit ? 'Edit Task' : 'Create Task'}</h2>

        <form onSubmit={handleSubmit}>
          {/* Methodology */}
          <div style={formFieldStyle}>
            <label>Methodology</label>
            <input
              type="text"
              name="methodology"
              value={formData.methodology}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project Phase */}
          <div style={formFieldStyle}>
            <label>Project Phase</label>
            <input
              type="text"
              name="projectPhase"
              value={formData.projectPhase}
              onChange={handleChange}
              required
            />
          </div>

          {/* Assigned */}
          <div style={formFieldStyle}>
            <label>Assigned</label>
            <input
              type="text"
              name="assigned"
              value={formData.assigned}
              onChange={handleChange}
              required
            />
          </div>

          {/* Task */}
          <div style={formFieldStyle}>
            <label>Task</label>
            <input
              type="text"
              name="task"
              value={formData.task}
              onChange={handleChange}
              required
            />
          </div>

          {/* Due Date */}
          <div style={formFieldStyle}>
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Time */}
          <div style={formFieldStyle}>
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          {/* Revision */}
          <div style={formFieldStyle}>
            <label>Revision No</label>
            <input
              type="text"
              name="revisionNo"
              value={formData.revisionNo}
              onChange={handleChange}
              required
            />
          </div>

          {/* Status */}
          <div style={formFieldStyle}>
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Action: Submit/Close */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button
              type="submit"
              style={{
                padding: '8px 16px',
                backgroundColor: '#5c0000',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {taskToEdit ? 'Update Task' : 'Create Task'}
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '8px 16px',
                backgroundColor: '#e74c3c',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Styles
const formFieldStyle = {
  marginBottom: '15px',
};

export default CreateTasks;
