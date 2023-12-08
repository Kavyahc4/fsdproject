import React from 'react';
import EmployeeList from './EmployeeList';
import Navbar from './Navbar';

const App = () => {
  const employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT', imageUrl: 'john.jpg' },
    // Add more employee data
  ];

  return (
    <div>
        <Navbar/>
      <h1>Employee Page</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default App;
