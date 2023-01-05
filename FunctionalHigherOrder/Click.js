import React from "react";
import { higherComponent } from "./HigherOrderComopnent";
function Click(props) {
  return (
    <div>
      <button onClick={props.inc}>Inc</button>
      <button onClick={props.dec}>Dec</button>
      <span>Counter: {props.count}</span>
    </div>
  );
}

export default higherComponent(Click);
