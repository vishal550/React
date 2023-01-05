import React from "react";
import customHook from "./UseCustomHook";
function ClickCustomHook() {
  let [count, inc, dec] = customHook(5);
  return (
    <div>
      <button onClick={inc}>Inc BY 5</button>
      <button onClick={dec}>Dec By 5</button>
      <h2>count: {count}</h2>
    </div>
  );
}

export default ClickCustomHook;
