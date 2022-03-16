import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";
const ENDPOINT = "http://localhost:4001/";

export default function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <div className="timeDate-container">
      <p>
        <time className="date" dateTime={response}>
          {response.slice(0, 10)}
        </time>
      </p>
      <p>
        <time className="time" dateTime={response}>
          {response.slice(11, 19)}
        </time>
      </p>
    </div>
  );
}
