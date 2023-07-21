import React, { useState } from "react";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

//css
import styles from "./App.module.css";

//interface
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]); //é um array de ITask e começará com um array vazio

  const deleteTask = (id: number) => {
    //recebe id do elemento
    setTaskList(
      //alterar task
      taskList.filter((task) => {
        //fltra lista, onde cada item é nomeado como task
        return task.id !== id; //retorna elementos que tem id diferente ao que será removido
      }) //sendo assim ele retorna a lista toda, menos o item que eu quero remover
    );
  };

  return (
    <div>
      <Modal />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
