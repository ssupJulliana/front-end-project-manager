import React, { useState } from 'react';
import CreateTasks from './createtasks'; // Ensure this matches the file name exactly

const TitleDefense = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      assigned: 'Team A',
      task: 'Brainstorming',
      dateCreated: 'Dec 10, 2025',
      dueDate: 'Dec 12, 2025',
      time: '08:00 AM',
      methodology: 'Brainstorming Phase',
      projectPhase: 'Planning',
      revisionNo: 'No Revision',
      status: 'To Do',
    },
    {
      id: 2,
      assigned: 'Team B',
      task: 'Research and Analysis',
      dateCreated: 'Dec 15, 2025',
      dueDate: 'Dec 20, 2025',
      time: '09:00 AM',
      methodology: 'Research Phase',
      projectPhase: 'Planning',
      revisionNo: 'Rev. 01',
      status: 'In Progress',
    },
  ]);

  const [showCreateTask, setShowCreateTask] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleCreateTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowCreateTask(true); // Show the Create Task form with task data for editing
  };

  return (
    <div style={{ margin: '40px auto', maxWidth: '95%' }}>
      <div style={{ fontSize: '20px', fontWeight: '600', color: '#5c0000' }}>
        Tasks » <span style={{ color: '#000' }}>Title Defense</span>
      </div>

      {/* Create Task Button */}
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => {
            setShowCreateTask(true);
            setTaskToEdit(null); // Create a new task
          }}
          style={buttonStyle}
        >
          Create Task
        </button>
      </div>

      {/* Show CreateTasks modal if showCreateTask is true */}
      {showCreateTask && (
        <CreateTasks
          onClose={() => setShowCreateTask(false)} // Close modal
          onCreate={handleCreateTask} // Handle task creation
          taskToEdit={taskToEdit} // Pass task to edit
          onUpdate={handleUpdateTask} // Handle task update
        />
      )}

      {/* Task Table */}
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#fafafa' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: '#ffffffff', color: '#000000ff' }}>
              <th style={thStyle}>NO</th>
              <th style={thStyle}>Assigned</th>
              <th style={thStyle}>Task</th>
              <th style={thStyle}>Date Created</th>
              <th style={thStyle}>Due Date</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Methodology</th>
              <th style={thStyle}>Project Phase</th>
              <th style={thStyle}>Revision</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((entry) => (
              <tr key={entry.id}>
                <td style={tdStyle}>{entry.id}</td>
                <td style={tdStyle}>{entry.assigned}</td>
                <td style={tdStyle}>{entry.task}</td>
                <td style={tdStyle}>{entry.dateCreated}</td>
                <td style={tdStyle}>{entry.dueDate}</td>
                <td style={tdStyle}>{entry.time}</td>
                <td style={tdStyle}>{entry.methodology}</td>
                <td style={tdStyle}>{entry.projectPhase}</td>
                <td style={tdStyle}>{entry.revisionNo}</td>
                <td style={tdStyle}>{entry.status}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => handleEditTask(entry)} // Edit task
                    style={buttonStyle}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(entry.id)} // Delete task
                    style={{ ...buttonStyle, backgroundColor: '#e74c3c' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles
const thStyle = {
  padding: '12px',
  textAlign: 'left',
};

const tdStyle = {
  padding: '10px',
};

const buttonStyle = {
  padding: '6px 12px',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default TitleDefense;
