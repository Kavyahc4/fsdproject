import React from 'react';

const EmployeeList = ({ employees, onEdit }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
            <button onClick={() => onEdit(employee.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;