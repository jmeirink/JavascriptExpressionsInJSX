import React from "react";
import ReactDOM from "react-dom";

const fName = "Jesse";
const lName = "Meirink";
const number = Math.floor(Math.random() * 9);

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
