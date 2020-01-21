import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tauck Number counter</h1>
      <h2>
        Create a layout using flexbox that displays an integer and two buttons.
      </h2>
      <h2>
        One button should increment the displayed integer by one and the other
        button should reduce the integer by one. Do not allow the number to go
        above 10 or below 0 and an error message should appear if the user
        attempts to increment above 10 or reduce below 0.
      </h2>
    </div>
  );
}
