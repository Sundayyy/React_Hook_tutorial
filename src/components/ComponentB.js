import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentB = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentB
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("resest")}>
        Resest
      </button>
    </div>
  );
};

export default ComponentB;
