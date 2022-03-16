import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./button.css";
const ENDPOINT = "http://localhost:4001/";
const socket = socketIOClient(ENDPOINT);

export default function Button() {
  const [count, setCount] = useState(0);
  const [globalCount, setGlobalCount] = useState(0);

  useEffect(() => {
    socket.on("GlobalCount", (count) => {
      setGlobalCount(count);
    });
  }, []);

  const updateCount = () => {
    setCount(count + 1);
    socket.emit("PushCount", 1);
  };

  return (
    <div className="clickMe-container">
      <p className="click">You have clicked {count} times.</p>
      <p className="click">
        Everyone connected has clicked total of {globalCount} times.
      </p>
      <button className="click-button" onClick={() => updateCount()}>
        Click me
      </button>
    </div>
  );
}
