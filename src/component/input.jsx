import React from "react";
import OprateButton from "./oprateButton";

export default class Input extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map((element, i) => (
          <div key={i} className="row">
            {element.map((text, index) => (
              <OprateButton
                className={text !== "0" ? "btn" : "btn wide"}
                type={(index + 1) % 4 !== 0 ? "" : "orange"}
                name={text}
                key={text}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
