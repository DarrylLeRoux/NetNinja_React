import "./modal.css";

const Modal = ({ children, handleClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
      <button onClick={handleClose}>close</button>
    </div>
  );
};

export default Modal;
