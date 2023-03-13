import React from "react";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import style from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactElement;
  setOpen: (arg0: boolean) => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, setOpen, isOpen }) => {
  return (
    <div
      className={`${style.overlay} ${isOpen && style.active}`}
      onClick={() => setOpen(false)}
    >
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <button className={style.modal_close} onClick={() => setOpen(false)}>
          <GlobalSvgSelector id="x" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
