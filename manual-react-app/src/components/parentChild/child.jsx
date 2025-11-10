import React from "react";

export default function Child(props) {
  return (
    <div>
      <h1>Counter: {props.counter}</h1>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrement</button>
    </div>
  );
}
