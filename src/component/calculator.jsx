import React from "react";
import Display from "./display";
import Input from "./input";
import Big from "big.js";
const buttonList = [
  ["AC", "+/-", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];
export default class Calculator extends React.Component {
  state = {
    sum: null,
    next: null,
    operation: null,
  };
  handleClick(e) {
    const { sum, operation, next } = this.state;
    if (e.target.className.indexOf("orange") === -1) {
      let newNext = next === null ? "" : String(next);
      switch (e.target.name) {
        case "AC":
          this.setState({ sum: null, operation: null, next: null });
          return;
        case "+/-":
          newNext *= -1;
          break;
        case "%":
          newNext /= 100;
          break;
        case ".":
          if (newNext) {
            if (newNext.includes(".")) {
            } else {
              newNext += ".";
            }
          }
          break;
        default:
          for (let i = 0; i <= 9; i++) {
            if (e.target.name === String(i)) {
              if (newNext === "0") {
                newNext = "";
              }
              newNext += String(i);
              if (newNext === "00") return;
            }
          }
      }
      this.setState({ next: newNext });
    } else {
      let newSum = 0;
      if (operation && next) {
        //計算
        newSum = calu(sum, operation, Number(next));
        this.setState({ sum: Number(newSum), next: null });
      } else if (next !== null) {
        newSum = next;
        this.setState({ sum: Number(newSum), next: null });
      }
      this.setState({ operation: e.target.name });
    }
  }
  render() {
    const { sum, next } = this.state;
    return (
      <div className="cal">
        <Display result={next || sum || 0} />
        <Input onClickBtn={e => this.handleClick(e)} list={buttonList} />
      </div>
    );
  }
}
function calu(num1, op, num2) {
  if (num1 === null) num1 = 0;
  switch (op) {
    case "+":
      return Big(num1).plus(num2);
    case "-":
      return Big(num1).minus(num2);
    case "×":
      return Big(num1).mul(num2);
    case "÷":
      return Big(num1).div(num2);
  }
}
