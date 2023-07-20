import React, { useState, ChangeEvent } from "react"; //chamando hook

const State = () => {
  const [text, setText] = useState<string | null>(null); //declara variável e como valor do useState, colocar como variável começará
                          //é string ou null

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { //e-evento(valor vindo do input) //declara valor do evento(changeevent) e mostra oq vai ser modificado com esse evento
    setText(e.target.value)//target - input / value - valor do input(texto que será alterado)
  };

  return (
    <div>
      <p>O texto é {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default State;
