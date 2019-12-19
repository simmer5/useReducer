import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterOne from "./Components/CounterOne";
import CounterTwo from "./Components/CounterTwo";

function App() {
  return (
    <div className="App">
      <CounterOne />
      <hr />
      <CounterTwo />
    </div>
  );
}

export default App;
