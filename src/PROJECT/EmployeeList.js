import React from 'react';
   import Employee from './Employee'; // Assuming you've created the Employee component

   const EmployeeList = ({ employees }) => {
     return (
       <div className="employee-list">
         {employees.map((employee) => (
           <Employee key={employee.id} {...employee} />
         ))}
       </div>
     );
   };

   export default EmployeeList;