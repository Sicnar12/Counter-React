import React from 'react';
import './style.css';




export default function App() {
   const [counter, setCounter]  = React.useState(0);


   function add() {
    setCounter(counter + 1)
   }
function subtract() {
  setCounter(counter - 1)
}
function reset() {
  setCounter(0)
}
    return (
    <div className='app'>
    <button onClick={add}>Add</button>
    <button onClick={subtract}>subtract</button>
    <button onClick={reset}>reset</button>
    <p>{counter}</p>
    </div>
    );
}