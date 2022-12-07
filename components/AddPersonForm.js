import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { addPerson } from '../actions';
import { connect } from 'react-redux';

function AddPersonForm() {
  const [person, setPerson] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }
  function handleSubmit(e) {
    if (person !== '') {
      props.addPerson(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter the name here"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  );
}
const mapDispatchToProps = {
  addPerson,
};
export default connect(null, mapDispatchToProps)(AddPersonForm);
