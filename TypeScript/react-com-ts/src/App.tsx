//4 - importação de components
import FirstComponent from "./components/FirstComponent";

//5 - destruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

//6 - useState
import State from "./components/State";

function App() {
  //1 - variáveis
  const name: string = "Matheus";
  const age: number = 30;
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  return (
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
    </div>
  );
}

export default App;
