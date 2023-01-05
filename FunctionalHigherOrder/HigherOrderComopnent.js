import React, { useState } from "react";

export function higherComponent(ToBeWrappedComponent) {
  return function () {
    let [count, setCount] = useState(0);
    const inc = () => {
      setCount(++count);
    };

    const dec = () => {
      setCount(--count);
    };
    return (
      <ToBeWrappedComponent
        count={count}
        inc={inc}
        dec={dec}
      ></ToBeWrappedComponent>
    );
  };
}
