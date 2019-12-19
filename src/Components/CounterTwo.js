import React, { useReducer } from "react";

//******************************************/
// ***State object and action object  exapmple*****
//*******************************************/

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - 1 };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - 10 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First counter: {count.firstCounter}</div>
      <div>Second counter: {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
          Increment Counter 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2" })}>
          Decrement Counter 2
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;
