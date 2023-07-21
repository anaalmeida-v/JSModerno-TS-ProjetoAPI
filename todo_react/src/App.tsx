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

  const hideOrShowModal = (display: boolean) => {
    //será feito uma condição de true e false(display:boolean) para ativar e desativar modal
    const modal = document.querySelector("#modal");
    if (display) {
      //se display for true, é para exibir modal, logo, hide é removida
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    } //adiciona class hide(modal oculto)
  };

  const editTask = (): void => {
    hideOrShowModal(true);
  };

  return (
    <div>
      <Modal
        children={<TaskForm btnText="Editar Tarefa" taskList={taskList} />}
      />
      {/*component é enviado como propriedade e impresso no Modal de edição*/}
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
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
