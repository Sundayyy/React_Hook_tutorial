import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentA = () => {
  const countContext = useContext(CountContext);

  return (
    <div>
      ComponentA
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
        <button />
      </button>
      <button onClick={() => countContext.countDispatch("resest")}>
        Resest
      </button>
    </div>
  );
};

export default ComponentA;
