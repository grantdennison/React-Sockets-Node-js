import "./button.css";
import React, { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <div className="clickMe-container">
      <p className="click">You clicked {count} times.</p>
      <button className="click-button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
