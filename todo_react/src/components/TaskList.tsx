import React from "react";

//interfaces
import { ITask } from "../interfaces/Task";

//css
import styles from "./TaskList.module.css";

type Props = {
  taskList: ITask[];//a taskList é um array de ITask
};

const TaskList = ({ taskList }: Props) => {//desestruturação da taskList
  return (
    <>
      {taskList.length > 0 ? (//checando se existem itens
        taskList.map((task) => (//cada item é nomeado com 'task'
          <div key={task.id} className={styles.task}>{/*key com identificador único*/}
            <div className={styles.details}>
              <h4>{task.title}</h4>{/*título*/}
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
            <i className="bi bi-pencil"></i>
            <i className="bi bi-trash"></i>
            </div>{/*ícones de edição e exclusão vindos do bootstrap*/}
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
