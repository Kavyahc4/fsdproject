import React, { useState,useEffect } from 'react';
import EmployeeList from './Elist';
import EmployeeForm from './Eform';
import './E.css';
import EmployeeCard from './EmployeeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faTableCells , faBarsStaggered,faBell,faComment,faCaretDown} from '@fortawesome/free-solid-svg-icons';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [displayMode, setDisplayMode] = useState("grid");
  
  

  useEffect(() => {
    import('./EmployeesData.json') 
      .then((data) => setEmployees(data.default))
      .catch((error) => console.error('Error loading employee data:', error));
  }, []);

  const [isAddEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);

  const openAddEmployeeModal = () => {
    setAddEmployeeModalOpen(true);
  };

  const closeAddEmployeeModal = () => {
    setAddEmployeeModalOpen(false);
  };

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
    closeAddEmployeeModal();
  };

  const editEmployee = (id, updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
  };
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const openEditModal = (employee) => {
    setEditModalOpen(true);
    setSelectedEmployee(employee);
  };

  const openDeleteModal = (employee) => {
    setDeleteModalOpen(true);
    setSelectedEmployee(employee);
  };
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };
  return (
    <>  
      <div className="navbar">
      <div className="navbar-left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEX0AW-xntJLRSfzi_o1H-Cx4sqUMFFqdjcBPolrhUFeDTGgft" alt="company logo" className='logo'/>
      <FontAwesomeIcon icon={faBarsStaggered} />
        <span>Dreamguy's Technologies</span>
      </div>
      <div className="navbar-right">
          <form>
            <input type="search" placeholder="Search here..."/>
            <button type="submit">Search</button>
          </form>
      <div className="language-dropdown">
      <img  className="logo" src="https://cdn-icons-png.flaticon.com/128/206/206626.png?ga=GA1.1.740973004.1701329086" alt='logo'></img>
          <span className="dropdown-icon">English <FontAwesomeIcon icon={faCaretDown} /></span>
        </div>

        <div className='iconsNav'>
        <FontAwesomeIcon icon={faBell}/> 
        <FontAwesomeIcon icon={faComment}/>
        </div>
            <div className="admin-dropdown">
            <img  className="logo" src="https://sumits.me/HRMS/assets/img/profiles/avatar-21.jpg" alt='logo'></img>
            <span className="dropdown-icon1">Admin<FontAwesomeIcon icon={faCaretDown} /></span>
        </div>
      </div>
    </div>
      <div className="dashboard-container">
        <div className="left-section">
          <h3>Employee</h3>
          <p>Dashboard/Employee</p>
        </div>
      <div className="right-section">
        <div className="icons">
           <FontAwesomeIcon icon={faTableCells} className={`icon ${displayMode === "grid" ? "active" : ""}`}
      onClick={() => setDisplayMode("grid")} />
           <FontAwesomeIcon icon={faBars} className={`icon ${displayMode === "list" ? "active" : ""}`}
      onClick={() => setDisplayMode("list")} />
        </div>
        <button className="add-employee-btn" onClick={openAddEmployeeModal}>+ Add Employee</button>
      </div>
    </div>
   
   <div className="input-fields">
        <input type="text" placeholder="Employee ID" className="Employee-ID" />
        <input type="text" placeholder="Employee Name" className="Employee-Name" />
        <select class="Designation" > Designation
           <option value="en">Select Designation</option>
           <option>web developer</option>
           <option>web designer</option>
        </select>
    
    <button type="button" className='btn btn-success'>Search</button>
    </div>
           {displayMode === "grid" ? (
        <div className="employee-grid">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onEdit={() => openEditModal(employee)}
              onDelete={() => openDeleteModal(employee)}
            />
          ))}
        </div>
      ) : (
        <EmployeeList
          employees={employees}
          onEdit={openEditModal}
          onDelete={openDeleteModal}
          isListMode={displayMode === "list"}
        />
      )}
      {isAddEmployeeModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeAddEmployeeModal}>
              &times;
            </span>
            <EmployeeForm addEmployee={addEmployee} closeModal={closeAddEmployeeModal} />
          </div>
        </div>
      )}  
      {isEditModalOpen && (
        <EditModal
          employee={selectedEmployee}
          closeModal={() => setEditModalOpen(false)}
          editEmployee={editEmployee}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          employee={selectedEmployee}
          closeModal={() => setDeleteModalOpen(false)}
          deleteEmployee={deleteEmployee}
        />
      )}
</> 
)
}

export default EmployeePage;
