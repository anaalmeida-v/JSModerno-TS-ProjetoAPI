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
          <div key={task.id}>{/*exibe título do item(chamado com a key do identificador único*/}
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
