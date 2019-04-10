import React from "react";

const ComponentName = ({ text }) => <div>{text}</div>;

ComponentName.defaultProps = {
  text: "Hello world"
};

export default ComponentName;
