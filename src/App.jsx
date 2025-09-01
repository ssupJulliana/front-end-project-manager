// src/App.jsx

import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import Tasks from './components/tasks/tasks';
import TasksTitleDefense from './components/tasks/title-defense-tasks';
import TasksOralDefense from './components/tasks/oral-defense-tasks';
import TasksFinalDefense from './components/tasks/final-defense-tasks';
import PMTaskAllocation from './components/tasks/pm-task-allocation';
import PMAdviserTasks from './components/pm-adviser-tasks'; // ✅ Adviser Tasks
import PMTasksBoard from './components/pm-tasks-board/pm-tasks-board'; // ✅ Tasks Board (renamed & moved)
import PMTasksRecord from './components/pm-tasks-record/pm-tasks-record'; // ✅ Tasks Record added

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav
        style={{
          padding: '10px 20px',
          background: '#3B0304',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <Link to="/tasks" style={navLinkStyle}>Tasks</Link>
        <Link to="/adviser-tasks" style={navLinkStyle}>Adviser Tasks</Link>
        <Link to="/tasks-board" style={navLinkStyle}>Tasks Board</Link>
         <Link to="/tasks-record" style={navLinkStyle}>Tasks Record</Link> {/* ✅ Added */}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task-allocation" element={<PMTaskAllocation />} />
        <Route path="/adviser-tasks" element={<PMAdviserTasks />} />
        <Route path="/tasks-board" element={<PMTasksBoard />} />
        <Route path="/tasks-record" element={<PMTasksRecord />} /> {/* ✅ Added */}
        <Route path="/title-tasks-record" element={<TasksTitleDefense />} />
        <Route path="/oral-tasks-record" element={<TasksOralDefense />} />
        <Route path="/final-tasks-record" element={<TasksFinalDefense />} />

        {/* 404 fallback route */}
        <Route path="*" element={<h2 style={{ padding: 20 }}>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default App;
