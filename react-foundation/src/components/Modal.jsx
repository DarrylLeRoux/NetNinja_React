import "./modal.css";
import { createPortal } from "react-dom";

const Modal = ({ children, handleClose }) => {
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
