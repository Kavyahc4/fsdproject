import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort,faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const EmployeeList = ({ employees, onEdit, onDelete, isListMode }) => {
  return (
    <div className={`employee-list ${isListMode ? "list-mode" : ""}`}>
      <div>show  
        <select>
          <option>10</option>
         <option>20</option>
        </select>
        entries
        </div>
      <table>
        <thead>
          <tr>
            <th>Name <FontAwesomeIcon icon={faSort} style={{color: "#818a89",paddingLeft:"200px"}} /></th>
            <th>Employee ID<FontAwesomeIcon icon={faSort} style={{color: "#818a89",paddingLeft:"80px"}} /></th>
            <th>Email  <FontAwesomeIcon icon={faSort} style={{color: "#818a89",paddingLeft:"130px"}} /></th>
            <th>Mobile  <FontAwesomeIcon icon={faSort} style={{color: "#818a89",paddingLeft:"130px"}} /></th>
            <th>Join Date <FontAwesomeIcon icon={faSort} style={{color: "#818a89",paddingLeft:"30px"}} /></th>
            <th>Role  <FontAwesomeIcon icon={faSort} style={{color: "#818a89",paddingLeft:"70px"}} /></th>
            <th>Action  <FontAwesomeIcon icon={faSort} style={{color: "#818a89",paddingLeft:"30px"}} /></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name} {employee.designation} <img src={employee.image} alt={employee.name} style={{height:"30px",width:"30px",float:"left",borderRadius:"14px",marginRight:"12px"}}/></td>
              <td>{employee.EmployeeID}</td>
              <td>{employee.Email}</td>
              <td>{employee.Mobile}</td>
              <td>{employee.JoinDate}</td>
              <td>
                <select style={{borderRadius:"15px"}}><option>Web Designer</option>
                        <option>Web Developer</option>
                        {/* <option>Android Developer</option>
                        <option>IOS Developer</option> */}
                </select>
              </td>
              <td>
                  <FontAwesomeIcon icon={faEllipsisV} style={{marginLeft:"68px"}} /> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;

