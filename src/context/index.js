import React, { useReducer } from "react";

var CounterStateContext = React.createContext();
var CounterDispatchContext = React.createContext();

function counterReducer(state, action) {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    default:
      throw new Error(`unabled action type: ${action.type}`);
  }
}

function CounterProvider({ children }) {
  var [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  return (
    <CounterStateContext value={state}>
      <counterDispatchContext value={dispatch}>
        {children}
      </counterDispatchContext>
    </CounterStateContext>
  );
}

function useCounterState() {
  var context = React.createContext(CounterStateContext);
  if (context === undefined)
    throw new Error("useLayout Dispatch must be used within a  layoutProvider");
  return context;
}

function useCounterDispatch() {
  var context = React.createContext(CounterDispatchContext);
  if (context === undefined)
    throw new Error("useLayout Dispatch must be used within a  layoutProvider");
  return context;
}

export { CounterProvider, useCounterState, useCounterDispatch, addCounter };

// #####################################

function addCounter(dispatch) {
  dispatch({
    type: "INC",
  });
}
