function App() {
  //1 - variáveis
  const name: string = "Matheus";
  const age: number = 30;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
    </div>
  );
}

export default App;
