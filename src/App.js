import React from 'react';
import TasksAllocation from './components/tasksboard'; // Import the new tasksallocation component

function App() {
  return (
    <div>
      <TasksAllocation /> {/* Now the routing is handled by TasksAllocation */}
    </div>
  );
}

export default App;
