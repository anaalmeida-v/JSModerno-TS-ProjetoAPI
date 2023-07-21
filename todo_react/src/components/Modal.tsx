import React from "react";

//css
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode; //basicamente dizendo que JSX será usado dentro desse children
};

const Modal = ({ children }) => {
  return (
    <div id="modal">
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
