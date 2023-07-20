import React, { useState, ChangeEvent, FormEvent, useEffect } from "react"; //useState: manusear estado;ChangeEvent:acionado quando usuário altera valor do elemento; FormEvent: submeter form.
import styles from "./TaskForm.module.css";

//interface
import { ITask } from "../interfaces/Task";

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0); //tipo:number - começa como '0'
  const [title, setTitle] = useState<string>(""); //tipo:string - começa vazio
  const [difficulty, setDifficulty] = useState<number>(0); //dificuldade da tarefa

  const addTaskHandler = () => {}; //realiza ação de inclusão de tarefas

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //tipando event como elemento html
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value)); //transformando string em number
    }
    //console.log(title);
    //console.log(difficulty);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      {/*quando formulário for enviado, função addTaskHandler é executada*/}
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange} //quando há mudança no elemento, evento é disparado
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
        />
      </div>
      <input type="submit" value={btnText} onChange={handleChange} />
    </form>
  );
};

export default TaskForm;
