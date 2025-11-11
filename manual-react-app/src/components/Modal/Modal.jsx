import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"; // we'll style it next

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
