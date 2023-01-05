import { useState } from "react";
export default function useCustomHook(incremntBy) {
  let [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + incremntBy);
  };

  const dec = () => {
    setCount(count - incremntBy);
  };

  return [count, inc, dec];
}
