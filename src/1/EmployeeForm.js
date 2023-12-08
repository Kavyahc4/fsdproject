import React, { useState } from 'react';

const EmployeeForm = ({ onSubmit, onCancel, initialValues }) => {
  const [name, setName] = useState(initialValues.name || '');
  const [position, setPosition] = useState(initialValues.position || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, position });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Position:
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EmployeeForm;