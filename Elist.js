import React from 'react';

   const EmployeeList = ({ employees, editEmployee }) => {
     return (
       <ul>
         {employees.map((employee) => (
           <li key={employee.id}>
             {employee.name} - {employee.position}
             <button onClick={() => editEmployee(employee.id, { ...employee, name: 'Updated Name' })}>
               Edit
             </button>
           </li>
         ))}
       </ul>
     );
   };

   export default EmployeeList;

