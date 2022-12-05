import { useReducer } from "react";

// simple typing for useReducer
type CounterState = {
  count: number;
};

type CounterAction = {
  // type: string;

  // since string is too wide of a definition because there are only so many actions we're checking for
  // we can use a union of string literals to define acceptable values of the type property
  type: "increment" | "decrement" | "reset";

  payload?: number;
};

// initial state
const initialState = { count: 0 };

// // // // // advanced typing for useReducer // // // // //
//
//
// the following three types will allow us to have increment and decrement with payloads and reset without a payload

// We first define the UpdateAction type with type and payload
// we'll keep the discriminated union approach for the type property
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

// We then define ResetAction without the payload
type ResetAction = {
  type: "reset";
};

// CounterAction2 type can be either UpdateAction or ResetAction
type CounterAction2 = UpdateAction | ResetAction;
//
//
// // // // end of advanced typing for useReducer // // // //

// reducer function
// For the advanced case, we change the action type from CounterAction to CounterAction2
function reducer(state: CounterState, action: CounterAction2) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "reset":
      return initialState;
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br />
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};

export default Counter;
