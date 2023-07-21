import React, { useState, ChangeEvent, FormEvent, useEffect } from "react"; //useState: manusear estado;ChangeEvent:acionado quando usuário altera valor do elemento; FormEvent: submeter form.
import styles from "./TaskForm.module.css";

//interface
import { ITask } from "../interfaces/Task";

type Props = {
  btnText: string;
  taskList: ITask[]; //chamando lista
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>; //dispachando um evento(setState) que trabalha com ITask//?-pode ou não vir(opcional)
  task?: ITask | null//opcional e derivada de ITask - valor pode vir preenchido ou vazio
}; //? - opcional

const TaskForm = ({ btnText, taskList, setTaskList, task }: Props) => {
  const [id, setId] = useState<number>(0); //tipo:number - começa como '0'
  const [title, setTitle] = useState<string>(""); //tipo:string - começa vazio
  const [difficulty, setDifficulty] = useState<number>(0); //dificuldade da tarefa

  useEffect(()=>{//mapeia valor de array de dependência, com isso tem o controle de quando pode ser executado, não tendo um loop infinito
    
    if(task){
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }//quando vier uma task, retorna dados da tarefa

  }, [task])//quando houver uma alteração useEffect é rodado

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    //realiza ação de inclusão de tarefas - envio de submissão do formulário
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000); //id aleatório para ser possível se referir facilmente a tarefa a ser incluída ou deletada
    const newTask: ITask = { id, title, difficulty }; //nova tarefa a ser adicionada
    setTaskList!([...taskList, newTask]); //adiciona tudo que tem na taskList e as novas tasks e junta tudo em um array

    //limpando formulário após envio dos dados da tarefa
    setTitle("");
    setDifficulty(0);

    console.log(taskList);
  };

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
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange} //quando há mudança no elemento, evento é disparado
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} onChange={handleChange} />
    </form>
  );
};

export default TaskForm;
