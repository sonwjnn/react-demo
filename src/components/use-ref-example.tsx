import { useState, useRef, useEffect } from "react";

const ExampleUseRef = () => {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  useEffect(() => {
    console.log("Component re-rendered");
  });

  const incrementState = () => {
    setStateCount(stateCount + 1);
  };

  const incrementRef = () => {
    refCount.current += 1;
    console.log("Ref count:", refCount.current);
  };

  return (
    <div>
      <h2>useState vs useRef Re-render Comparison</h2>
      <p>State count: {stateCount}</p>
      <p>Ref count: {refCount.current}</p>
      <button onClick={incrementState}>Increment State</button>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
};

export default ExampleUseRef;
