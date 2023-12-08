import React, { useState } from 'react';
import EmployeeList from './EmployeeList.js';
import EmployeeForm from './EmployeeForm.js';


const EmployeesPage = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Doe', position: 'Designer' },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (employeeId) => {
    const selected = employees.find((employee) => employee.id === employeeId);
    setSelectedEmployee(selected);
  };

  const handleFormSubmit = (employeeData) => {
    if (selectedEmployee) {
      // Edit existing employee
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === selectedEmployee.id ? { ...employee, ...employeeData } : employee
        )
      );
      setSelectedEmployee(null);
    } else {
      // Add new employee
      setEmployees((prevEmployees) => [
        ...prevEmployees,
        { id: Date.now(), ...employeeData },
      ]);
    }
  };

  const handleCancel = () => {
    setSelectedEmployee(null);
  };

  return (
    <div>
      <EmployeeList employees={employees} onEdit={handleEdit} />
      <br />
      <EmployeeForm
        onSubmit={handleFormSubmit}
        onCancel={handleCancel}
        initialValues={selectedEmployee}
      />
    </div>
  );
};

export default EmployeesPage;