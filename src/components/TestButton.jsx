import React from "react";

const TestButton = (Props) => {
  const {children, color="primary", buttonPressed = ()=>{return;} } = Props;

  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        buttonPressed();
      }}
    >
      {children}
    </button>
  );
}

export default TestButton;
