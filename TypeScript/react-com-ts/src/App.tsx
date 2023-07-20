import React, { createContext } from "react";

//4 - importação de components
import FirstComponent from "./components/FirstComponent";

//5 - destruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

//6 - useState
import State from "./components/State";

//10 - utilizando contexto
import Context from './components/Context'

//8 - type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

//9 - context
interface IAppContext {//interface - declarando tipos para variáveis
  language: string;
  framework: string;
  projects: number;
}

//function context
export const AppContext = createContext<IAppContext | null>(null); //precisa ser exportado para poder ser acessado
//criando context que recebe valor de dado suportado

function App() {
  //1 - variáveis
  const name: string = "Matheus";
  const age: number = 30;
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  //8 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "opa";
  const testandoFixed: fixed = "Isso";

  //9 - context
  const contextValue: IAppContext = {//obj
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando!</p>}
        <h3>{userGreeting(name)}</h3>
        {/* se eu tentar colocar o age por exemplo, a variável será recusada, por ser um number e não uma string */}
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
