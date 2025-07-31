import React, { useState, useEffect } from 'react';

const CreateTasksFinal = ({ onClose, onCreate, taskToEdit, onUpdate }) => {
  const [assigned, setAssigned] = useState('');
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [time, setTime] = useState('');
  const [methodology, setMethodology] = useState('');
  const [projectPhase, setProjectPhase] = useState('');
  const [revisionNo, setRevisionNo] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setAssigned(taskToEdit.assigned);
      setTask(taskToEdit.task);
      setDueDate(taskToEdit.dueDate);
      setTime(taskToEdit.time);
      setMethodology(taskToEdit.methodology);
      setProjectPhase(taskToEdit.projectPhase);
      setRevisionNo(taskToEdit.revisionNo);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      assigned,
      task,
      dueDate,
      time,
      methodology,
      projectPhase,
      revisionNo,
      status,
    };

    if (taskToEdit) {
      newTask.id = taskToEdit.id;
      onUpdate(newTask);  // Update task if editing
    } else {
      onCreate(newTask); // Create new task
    }

    onClose(); // Close modal after submission
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        <h2>{taskToEdit ? 'Edit Task' : 'Create Task'}</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label>Assigned:</label>
            <input
              type="text"
              value={assigned}
              onChange={(e) => setAssigned(e.target.value)}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label>Task:</label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label>Due Date:</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label>Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label>Methodology:</label>
            <input
              type="text"
              value={methodology}
              onChange={(e) => setMethodology(e.target.value)}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label>Project Phase:</label>
            <input
              type="text"
              value={projectPhase}
              onChange={(e) => setProjectPhase(e.target.value)}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label>Revision No:</label>
            <input
              type="text"
              value={revisionNo}
              onChange={(e) => setRevisionNo(e.target.value)}
            />
          </div>

          <div style={formGroupStyle}>
            <label>Status:</label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>

          <div style={buttonContainerStyle}>
            <button type="submit" style={buttonStyle}>
              {taskToEdit ? 'Update Task' : 'Create Task'}
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ ...buttonStyle, backgroundColor: '#e74c3c' }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Styles for modal and form
const modalOverlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  minWidth: '400px',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default CreateTasksFinal;
