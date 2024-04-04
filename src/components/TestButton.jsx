import React from "react";

const TestButton = (Props) => {
  const {children, color="primary", buttonPressed = ()=>{return;} } = Props;

  return (
    <button
      type="button"
      className={"btn btn-" + color + " d-grid gap-2 col-5 d-md-block container text-centered"}
      onClick={() => {
        buttonPressed();
      }}
    >
      {children}
    </button>
  );
}

export default TestButton;
