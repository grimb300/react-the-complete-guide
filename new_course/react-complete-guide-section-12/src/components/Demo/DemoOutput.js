import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "This is new!" : ""}</p>;
};

// React.memo compares previous props with current props and will only execute if they change
// This may be too expensive to do on all components
export default React.memo(DemoOutput);
