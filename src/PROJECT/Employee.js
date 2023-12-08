import React from 'react';

   const Employee = ({ name, position, department, imageUrl }) => {
     return (
       <div className="employee-card">
         <img src={imageUrl} alt={name} />
         <h3>{name}</h3>
         <p>{position}</p>
         <p>{department}</p>
       </div>
     );
   };

   export default Employee;