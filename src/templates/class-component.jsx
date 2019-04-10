import React, { Component } from "react";

class ComponentName extends Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

ComponentName.defaultProps = {
  text: "Hello world"
};

export default ComponentName;
