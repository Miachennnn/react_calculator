import React from "react";
import Display from "./display";
import Input from "./input";
const buttonList = [
  ["AC", "+/-", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="cal">
        <Display />
        <Input list={buttonList} />
      </div>
    );
  }
}
