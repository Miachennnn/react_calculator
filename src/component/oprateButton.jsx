import React from "react";

export default class OprateButton extends React.Component {
  render() {
    let classString = this.props.className;
    if (this.props.type === "orange" || this.props.name === "=") {
      classString += " orange";
    }
    return <button className={classString}>{this.props.name}</button>;
  }
}
