import "./modal.css";

const Modal = () => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at checkout</p>
      </div>
    </div>
  );
};

export default Modal;
