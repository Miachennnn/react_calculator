import React from "react";

export default class OprateButton extends React.Component {
  render() {
    let classString = this.props.className;
    if (this.props.next || this.props.name === "=") {
      classString += " orange";
    }
    return (
      <button
        name={this.props.name}
        className={classString}
        onClick={e => this.props.onClick(e)}
      >
        {this.props.name}
      </button>
    );
  }
}
