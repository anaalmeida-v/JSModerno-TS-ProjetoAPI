import React from "react";

//css
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode; //basicamente dizendo que JSX será usado dentro desse children
};

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    //método para fechamento do modal//MouseEvent - pois será um click no componente de react
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide"); //adicionando hide a lista de classes(quando closeModal é ativado, hide está sendo enviado)
  }; //exclamação! indica que com certeza item vai ser enviado

  return (
    <div id="modal" className="hide">{/*hide faz com que item fique oculto*/}
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
