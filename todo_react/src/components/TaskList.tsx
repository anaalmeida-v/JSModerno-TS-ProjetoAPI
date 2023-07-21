import React from "react";

//interfaces
import { ITask } from "../interfaces/Task";

//css
import styles from "./TaskList.module.css";

type Props = {
  taskList: ITask[]; //a taskList é um array de ITask
  handleDelete(id: number): void; //função recebe id do tipo number
  handleEdit(): void;
}; //void: valor é vazio, nada é atribuído

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  //desestruturação da taskList
  return (
    <>
      {taskList.length > 0 ? ( //checando se existem itens
        taskList.map(
          (
            task //cada item é nomeado com 'task'
          ) => (
            <div key={task.id} className={styles.task}>
              {/*key com identificador único*/}
              <div className={styles.details}>
                <h4>{task.title}</h4>
                {/*título*/}
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <i
                  className="bi bi-pencil"
                  onClick={() => {
                    handleEdit();
                  }}
                ></i>
                <i
                  className="bi bi-trash"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                ></i>
                {/*função não é passada direto para não ser executada assim que a página for carregada, por isso, precisa ser passada por uma arrowfucntion */}
              </div>
              {/*ícones de edição e exclusão vindos do bootstrap*/}
            </div>
          )
        )
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
