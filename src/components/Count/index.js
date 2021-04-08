import React, { useState } from "react";

import "./styles.css";

function Count() {
  const [count, setCount] = useState(0)

  const handleDecrease = () => {
    setCount(count => count - 1)
  };  
  
  const handleIncrease = () => {
    setCount(count => count + 1)
  };

  return (
    <div className="count">
      <div className="count-label">
        <h1>Contador</h1>
      </div>

      <div className="count-label">
        <h2>{count}</h2>
      </div>

      <div className="count-buttons">
        <button onClick={handleDecrease}>-1</button>
        <button onClick={handleIncrease}>+1</button>
      </div>
    </div>
  );
}

export default Count;
