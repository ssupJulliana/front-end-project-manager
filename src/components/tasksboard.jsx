import React, { useState } from 'react';

const TasksBoard = () => {
  // Sample data for the tasks, without any "Missed" tasks for now
  const [tasks, setTasks] = useState([
    { id: 1, team: 'Mendoza, Et Al', task: 'Chapter 4', subtask: 'Implementation', dueDate: 'Feb 25, 2025', time: '8:00 AM', revisionNo: 'No Revision', status: 'To Do' },
    { id: 2, team: 'Addrialene M.', task: 'Chapter 3', subtask: 'Implementation', dueDate: 'Feb 15, 2025', time: '8:00 AM', revisionNo: 'No Revision', status: 'To Do' },
    { id: 3, team: 'Justine P.', task: 'Chapter 3', subtask: 'Implementation', dueDate: 'Feb 13, 2025', time: '8:00 AM', revisionNo: 'No Revision', status: 'To Do' },
    { id: 4, team: 'Mendoza, Et Al', task: 'Chapter 2', subtask: 'Draft', dueDate: 'Feb 20, 2025', time: '8:00 AM', revisionNo: 'No Revision', status: 'In Progress' },
    { id: 5, team: 'Alenjandro F.', task: 'Chapter 5', subtask: 'Draft', dueDate: 'Feb 22, 2025', time: '8:00 AM', revisionNo: 'No Revision', status: 'In Progress' },
    { id: 6, team: 'Julliana C.', task: 'Chapter 6', subtask: 'Final', dueDate: 'Feb 21, 2025', time: '8:00 AM', revisionNo: 'No Revision', status: 'To Review' },
    { id: 7, team: 'John Reagan S.', task: 'Chapter 3', subtask: 'Implementation', dueDate: 'Feb 11, 2025', time: '8:00 AM', revisionNo: 'No Revision', status: 'In Progress' },

    // No "Missed" tasks yet
  ]);

  // Function to get background color based on the status
  const getStatusColor = (status) => {
    switch (status) {
      case 'To Do':
        return '#ffcc00'; // Yellow for To Do
      case 'In Progress':
        return '#28a745'; // Green for In Progress
      case 'To Review':
        return '#007bff'; // Blue for To Review
      case 'Missed':
        return '#dc3545'; // Red for Missed (Not using this for now)
      default:
        return 'transparent';
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Tasks Board</h2>
      <div style={styles.board}>
        {/* To Do Column */}
        <div style={{ ...styles.column }}>
          <h3 style={{ ...styles.columnTitle, backgroundColor: '#ffcc00' }}>To Do</h3> {/* Orange background */}
          {tasks.filter(task => task.status === 'To Do').map(task => (
            <div key={task.id} style={{ ...styles.card, borderLeft: `10px solid ${getStatusColor(task.status)}` }}>
              <h4>{task.team}</h4>
              <p>{task.task}</p>
              <p>{task.subtask}</p>
              <p style={styles.dueDate}>Due: {task.dueDate} {task.time}</p>
              <p>Revision: {task.revisionNo}</p>
            </div>
          ))}
        </div>

        {/* In Progress Column */}
        <div style={{ ...styles.column }}>
          <h3 style={{ ...styles.columnTitle, backgroundColor: '#28a745' }}>In Progress</h3> {/* Green background */}
          {tasks.filter(task => task.status === 'In Progress').map(task => (
            <div key={task.id} style={{ ...styles.card, borderLeft: `10px solid ${getStatusColor(task.status)}` }}>
              <h4>{task.team}</h4>
              <p>{task.task}</p>
              <p>{task.subtask}</p>
              <p style={styles.dueDate}>Due: {task.dueDate} {task.time}</p>
              <p>Revision: {task.revisionNo}</p>
            </div>
          ))}
        </div>

        {/* To Review Column */}
        <div style={{ ...styles.column }}>
          <h3 style={{ ...styles.columnTitle, backgroundColor: '#007bff' }}>To Review</h3> {/* Blue background */}
          {tasks.filter(task => task.status === 'To Review').map(task => (
            <div key={task.id} style={{ ...styles.card, borderLeft: `10px solid ${getStatusColor(task.status)}` }}>
              <h4>{task.team}</h4>
              <p>{task.task}</p>
              <p>{task.subtask}</p>
              <p style={styles.dueDate}>Due: {task.dueDate} {task.time}</p>
              <p>Revision: {task.revisionNo}</p>
            </div>
          ))}
        </div>

        {/* Missed Column (currently empty) */}
        <div style={{ ...styles.column }}>
          <h3 style={{ ...styles.columnTitle, backgroundColor: '#dc3545' }}>Missed</h3> {/* Red background */}
          {/* No tasks in "Missed" yet */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    maxWidth: '95%',
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
  board: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    // Adjusted for 4 columns
  },
  column: {
    width: '23%', // Adjust width for 4 columns
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    minHeight: '400px',
    overflowY: 'auto',
  },
  columnTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
    padding: '12px',
    color: 'white',
    borderRadius: '8px',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: '15px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  dueDate: {
    fontSize: '14px',
    color: '#777',
  },
};

export default TasksBoard;
