import React from 'react';

const DeleteModal = ({ employee, closeModal, deleteEmployee }) => {
  const handleDelete = () => {
    deleteEmployee(employee.id);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span>
        <h2>Delete Employee</h2>
        <p>Are you sure you want to delete {employee.name}?</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteModal;
