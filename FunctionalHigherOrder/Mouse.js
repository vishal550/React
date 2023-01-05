import React from "react";
import { higherComponent } from "./HigherOrderComopnent";

function Mouse(props) {
  return (
    <div>
      <button onMouseOver={props.inc}>Inc</button>
      <button onMouseOver={props.dec}>Dec</button>
      <span>Counter: {props.count}</span>
    </div>
  );
}

export default higherComponent(Mouse);
