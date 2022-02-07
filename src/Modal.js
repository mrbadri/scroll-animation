import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";

const modalRoot = document.getElementById("modal_root");

const generate = () => {
  const divBar = document.createElement("div");

  const divCount = document.createElement("div");
  divBar.appendChild(divCount);

  return divBar;
};

const Modal = ({ children, open, onClose }) => {
  const modalBar = useRef(generate());

  console.log("git reset --soft");

  useEffect(() => {
    console.log(modalRoot.children.length);
    console.log(modalRoot.children);
    if (open) {
      modalRoot.appendChild(modalBar.current);
    } else {
      if (modalRoot.children.length > 0) {
        console.log("run if");
        modalRoot.removeChild(modalBar.current);
      }
    }

    return () => {
      if (modalRoot.children.length > 0)
        modalRoot.removeChild(modalBar.current);
    };
  }, [open]);

  return ReactDom.createPortal(children, modalRoot);
};

export default Modal;
