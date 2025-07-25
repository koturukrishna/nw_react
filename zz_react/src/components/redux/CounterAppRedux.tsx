import { useReducer } from "react";
import type { ActionTypes } from "../../types/types";

const reducer = (state: { count: number }, action: ActionTypes) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 8 };
    case "DECREMENT":
      return { count: state.count - 4 };
    case "RESET":
      return { count: 8 };
    default:
      return state;
  }
};

const CounterAppRedux = () => {
  const [state, dispatch] = useReducer<
    {
      count: number;
    },
    [action: ActionTypes]
  >(reducer, { count: 8 });
  return (
    <div>
      <h3>counter app using redux</h3>
      <h3>Count : {state.count}</h3>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default CounterAppRedux;
