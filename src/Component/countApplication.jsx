import React, { useState } from "react";

function CountApplication() {
  const [count, setCount] = useState(0);

  const Adding = () => {
    // You're directly modifying the count state variable — which is not allowed in React.

    // count ethe immutable aahe
    //  count=count+1;
    setCount((prev) => prev + 1);
  };
  const Decrese = () => {
    //setCount(prev=> prev-1);
    // if(count<=0){
    //     alert("You Not goes on Negative Count ")
    //     setCount(0);
    // }
    // else{
    //     setCount(count-1);
    // }

    //Adding ki 0 se noche na jaye
    setCount((prev) => {
      if (prev <= 0) {
        alert("You  are Not Go to Negative Value")
        return 0;
      } else {
        return prev - 1;
      }
    });
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Adding}> Add Amount </button>
      <button onClick={Decrese}> descrease Amount </button>
      <button onClick={Reset}>Reset Functionality</button>
    </div>
  );
}

export default CountApplication;
