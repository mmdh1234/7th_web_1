import React from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  if (typeof window === "undefined") {
    return null;
  }

  const node = document.getElementById("portal"); // `#portal`이 HTML에 있어야 함.

  return ReactDOM.createPortal(children, node);
};

export default ModalPortal;
