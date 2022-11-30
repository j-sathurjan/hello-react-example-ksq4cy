import React from 'react';
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
