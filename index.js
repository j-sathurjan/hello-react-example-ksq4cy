import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxCounterApp from './ReduxCounterApp';
import AddPersonForm from './components/AddPersonForm';
import PeopleList from './components/PeopleList';
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

//km  to miles converter
function Converter() {
  const [km, setKm] = useState(0);
  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    return (km / 1.609).toFixed(2);
  }
  return (
    <div class="converter">
      <input type="text" value={km} onChange={handleChange} />
      <p>
        {km} km is {convert(km)} Miles
      </p>
    </div>
  );
}
ReactDOM.render(<Converter />, document.getElementById('converter'));

//sum the numbers submitted by using form
function AddForm() {
  const [num, setNum] = useState(0);
  const [sum, setSum] = useState(0);
  function handleChange(e) {
    setNum(e.target.value);
  }
  function handleSubmit(e) {
    setSum(Number(num) + sum);
    e.preventDefault();
  }
  return (
    <form class="form" onSubmit={handleSubmit}>
      <input type="number" value={num} onChange={handleChange} />
      <input type="submit" value="Add" />
      <p>The Sum Of submitted Numbers : {sum}</p>
    </form>
  );
}
ReactDOM.render(<AddForm />, document.getElementById('addform'));

//List Rendering using array
const arr = ['Car', 'Bike', 'Three Wheeler', 'Lorry'];

function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return <ul>{listItems}</ul>;
}
ReactDOM.render(<MyList data={arr} />, document.getElementById('mylist'));
/*
//contact manager
let contactList = ['Ibrahim', 'Sathurjan', 'Gobishangar'];

function AddPersonForm(props) {
  const [person, setPerson] = useState('');
  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }
  function handleChange(e) {
    setPerson(e.target.value);
  }
  return (
    <form class="contactForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add the Name Here"
        onChange={handleChange}
        value={person}
      />
      <button type="submit" onSubmit={handleSubmit}>
        Add
      </button>
    </form>
  );
}
function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return (
    <div class="contactForm">
      <ul class="conatctlist">{listItems}</ul>
    </div>
  );
}
function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);
  function addPerson(name) {
    setContacts([...contacts, name]);
  }
  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
ReactDOM.render(
  <ContactManager data={contactList} />,
  document.getElementById('contact')
);
*/
/* redux counter app*/
/*
const initialState = { count: 0 };
// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    default:
      return state;
  }
}
const store = createStore(reducer);

const el = (
  <Provider store={store}>
    <ReduxCounterApp />
  </Provider>
);

ReactDOM.render(el, document.getElementById('reduxCounterApp'));
*/

//contactManager with redux
const initialState = { contacts: ['sathu', 'Thanu', 'vithu'] };
//reducer funtion
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PERSON':
      return { ...state, contacts: [...state.contacts, action.data] };
    default:
      return state;
  }
}
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById('contact')
);
