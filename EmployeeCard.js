import React ,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV ,faPencil,faTrashCan} from '@fortawesome/free-solid-svg-icons';


const EmployeeCard = ({ employee ,onEdit, onDelete}) => {
  const { id, name, designation, image } = employee;
   
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="employee-card">
        <div className="circle-container">
        <img src={image} alt={name} className="employee-image" />
      </div>
      <div className="employee-details">
        <h6>{name}</h6>
        <p>{designation}</p>
      </div>
      <div className="ellipsis-icon">
        <FontAwesomeIcon icon={faEllipsisV} />
        <div className="dropdown-menu">
          <div onClick={onEdit}><FontAwesomeIcon icon={faPencil}/>  Edit</div>
          <div onClick={onDelete}><FontAwesomeIcon icon={faTrashCan} />  Delete</div>
        </div>
      </div>
    </div>
    
  );
};

export default EmployeeCard;
