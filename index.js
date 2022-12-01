import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let user = 'Sathu';

ReactDOM.render(
  <h1 id="sathu">Hello, {user}!</h1>,
  document.getElementById('root')
);

function Item(props) {
  return (
    <div className="item">
      <b>Name:</b> {props.name} <br />
      <b>Price:</b> $ {props.price}
    </div>
  );
}
function App() {
  return (
    <div>
      <Item name="Cheese" price="4.99" />
      <Item name="Bread" price="1.5" />
      <Item name="Ice cream" price="24" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('list'));

class Hello extends React.Component {
  state = {
    name: 'Sathurjan',
  };

  render() {
    return <h1>Hello {this.state.name}.</h1>;
  }
}

ReactDOM.render(<Hello />, document.getElementById('stateEx'));

class Counter extends React.Component {
  state = {
    counter: 0,
  };
  increament = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  componentDidMount() {
    this.setState({ counter: 42 });
  }
  componentDidUpdate() {
    console.log('Number of class clicks: ' + this.state.counter);
  }
  render() {
    return (
      <div>
        <p class="count">Count : {this.state.counter}</p>
        <button onClick={this.increament}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('counterApp'));

function CounterApp() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('Number of functional clicks : ' + counter);
  });
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>Count : {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
ReactDOM.render(<CounterApp />, document.getElementById('counterApp2'));

function Toggle() {
  const [val, setVal] = useState('ON');
  function toggle() {
    setVal(val == 'ON' ? 'OFF' : 'ON');
  }
  return <button onClick={toggle}>{val}</button>;
}
ReactDOM.render(<Toggle />, document.getElementById('toggle'));

function Converter() {
  const [km, setKm] = useState(0);
  function handleChange(event) {
    setKm(event.target.value);
  }
  function convert(km) {
    return (km / 1.609).toFixed(2);
  }
  return (
    <div>
      <input type="text" value={km} onChange={handleChange} />
      <p>
        {km} km is {convert(km)} Miles
      </p>
    </div>
  );
}
ReactDOM.render(<Converter />, document.getElementById('converter'));
