import React from 'react';
import { connect } from 'react-redux';
import './style.css';

/* react-redux counter App */

// Action creator
function incrementCounter(num) {
  return { type: 'INCREMENT', num: num };
}

function ReduxCounterApp(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
  return (
    <div class="reduxIncrement">
      <p>{props.count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

const mapDispatchToProps = {
  incrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounterApp);
