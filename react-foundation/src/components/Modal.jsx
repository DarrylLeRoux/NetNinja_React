import "./modal.css";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
