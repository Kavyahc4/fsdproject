import React from 'react';
   import EmployeeList from './EmployeeList.js';

   const EmployeePage = () => {
     const employees = [
       { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT', imageUrl: 'john.jpg' },
       // Add more employee data
     ];

     return (
       <div>
         <h1>Employee Page</h1>
         <EmployeeList employees={employees} />
       </div>
     );
   };

   export default EmployeePage;