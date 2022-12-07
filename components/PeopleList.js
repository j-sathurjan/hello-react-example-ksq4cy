import React from 'react';
import { connect } from 'react-redux';
import '../style.css';

function PeoplesList(props) {
  const arr = props.contacts;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return (
    <div class="contactForm">
      <ul class="conatctlist">{listItems}</ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}
export default connect(mapStateToProps)(PeoplesList);
