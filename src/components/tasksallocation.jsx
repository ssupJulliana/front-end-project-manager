import React from 'react';

const TaskAllocation = () => {
  // Sample data for the table
  const taskData = [
    { id: 1, name: 'Addrialene G Mendoza', role: 'Project Manager', assignedTasks: 5, completedTasks: 3 },
    { id: 2, name: 'Harzwel Zhen B Lacson', role: 'Member', assignedTasks: 3, completedTasks: 2 },
    { id: 3, name: 'Julliana N Castaneda', role: 'Member', assignedTasks: 2, completedTasks: 0 },
    { id: 4, name: 'Alenjandro C Faustino', role: 'Member', assignedTasks: 4, completedTasks: 2 },
    { id: 5, name: 'Justine I Pare', role: 'Member', assignedTasks: 5, completedTasks: 1 },
    { id: 6, name: 'John Reagan S Pinpin', role: 'Member', assignedTasks: 3, completedTasks: 2 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Tasks Allocation</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableCell}>NO</th>
            <th style={styles.tableCell}>Name</th>
            <th style={styles.tableCell}>Role</th>
            <th style={styles.tableCell}>Assigned Tasks</th>
            <th style={styles.tableCell}>Completed Tasks</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((task, index) => (
            <tr key={task.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{index + 1}</td>
              <td style={styles.tableCell}>{task.name}</td>
              <td style={styles.tableCell}>{task.role}</td>
              <td style={styles.tableCell}>{task.assignedTasks}</td>
              <td style={styles.tableCell}>{task.completedTasks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    maxWidth: '90%',  // Increase the maxWidth for a larger container
    margin: '20px auto',  // Centers the container
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#5c0000',
    marginBottom: '20px',
    textAlign: 'left',  // Align header to the left
  },
  table: {
    width: '100%',  // Take full width
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  tableHeader: {
    backgroundColor: '#f5f5f5', // Light background for table header
    color: '#000',
  },
  tableRow: {
    borderBottom: '1px solid #ccc',
  },
  tableCell: {
    padding: '12px 16px',
    textAlign: 'left',
    border: '1px solid #ccc',
  },
};

export default TaskAllocation;
