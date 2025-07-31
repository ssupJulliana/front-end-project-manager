import React, { useState } from 'react';

const AdviserTasks = () => {
  // Sample data for the table
  const [tasks, setTasks] = useState([
    { id: 1, team: 'Mendoza, Et Al', task: 'Chapter 3', subtask: '', dueDate: 'Feb 20, 2025', time: '8:00 AM', revisionNo: 'No Revision', status: 'In Progress' },
    { id: 2, team: 'Mendoza, Et Al', task: 'Chapter 4', subtask: '', dueDate: 'Feb 25, 2025', time: '8:00 AM', revisionNo: 'No Revision', status: 'To Do' },
  ]);

  // Handle change in status dropdown
  const handleStatusChange = (id, newStatus) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Adviser Tasks</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableCell}>NO</th>
            <th style={styles.tableCell}>Team</th>
            <th style={styles.tableCell}>Task</th>
            <th style={styles.tableCell}>Subtask</th>
            <th style={styles.tableCell}>Due Date</th>
            <th style={styles.tableCell}>Time</th>
            <th style={styles.tableCell}>Revision No</th>
            <th style={styles.tableCell}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{index + 1}</td>
              <td style={styles.tableCell}>{task.team}</td>
              <td style={styles.tableCell}>{task.task}</td>
              <td style={styles.tableCell}>{task.subtask}</td>
              <td style={styles.tableCell}>{task.dueDate}</td>
              <td style={styles.tableCell}>{task.time}</td>
              <td style={styles.tableCell}>{task.revisionNo}</td>
              <td style={styles.tableCell}>
                <CustomDropdown
                  selectedStatus={task.status}
                  onStatusChange={(newStatus) => handleStatusChange(task.id, newStatus)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Custom Dropdown Component
const CustomDropdown = ({ selectedStatus, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (status) => {
    onStatusChange(status);
    setIsOpen(false);
  };

  // Function to get background color based on the status
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return '#d4edda'; // Light green
      case 'In Review':
        return '#cce5ff'; // Light blue
      case 'To Do':
        return '#fff3cd'; // Light yellow
      case 'Completed':
        return '#e0aaff'; // Light purple
      case 'On Hold':
        return '#f8d7da'; // Light red
      default:
        return 'transparent';
    }
  };

  return (
    <div style={styles.dropdownContainer}>
      <div 
        style={{
          ...styles.dropdownButton, 
          backgroundColor: getStatusColor(selectedStatus)
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedStatus}
      </div>
      {isOpen && (
        <div style={styles.dropdownList}>
          {['In Progress', 'In Review', 'To Do', 'Completed', 'On Hold'].map((status) => (
            <div 
              key={status}
              style={{
                ...styles.dropdownOption, 
                backgroundColor: getStatusColor(status)
              }}
              onClick={() => handleOptionClick(status)}
            >
              {status}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    maxWidth: '90%',
    margin: '20px auto',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#5c0000',
    marginBottom: '20px',
    textAlign: 'left',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  tableHeader: {
    backgroundColor: '#f5f5f5',
    color: '#000',
  },
  tableRow: {
    borderBottom: '1px solid #ccc',
  },
  tableCell: {
    padding: '12px 16px',
    textAlign: 'left',
    border: 'none',
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdownButton: {
    padding: '6px 8px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    textAlign: 'center',
    width: '100%',
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
  },
  dropdownOption: {
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '12px',
  },
};

export default AdviserTasks;
