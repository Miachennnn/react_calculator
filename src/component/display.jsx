import React from "react";

export default class Display extends React.Component {
  render() {
    return <div className="display">{String(this.props.result)}</div>;
  }
}
