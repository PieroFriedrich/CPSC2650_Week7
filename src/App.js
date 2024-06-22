import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div className="App">
      <h1>CPSC 2650 - Week 8</h1>
      <input
        placeholder="Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      {firstName !== "" && <p>Your name is {firstName}.</p>}
      {lastName != "" && <p>Your last name is {lastName}.</p>}
    </div>
  );
}

export default App;
