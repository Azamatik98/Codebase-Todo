import React from "react";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import "./Modal.scss";

interface ModalProps {
  children: React.ReactElement;
  setOpen: (arg0: boolean) => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, setOpen, isOpen }) => {
  return (
    <div
      className={`${"overlay"} ${isOpen && "active"} `}
      onClick={() => setOpen(false)}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close" onClick={() => setOpen(false)}>
          <GlobalSvgSelector id="x" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
