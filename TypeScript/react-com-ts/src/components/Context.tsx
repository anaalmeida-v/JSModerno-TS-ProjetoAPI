import React, { useContext } from "react";
import { AppContext } from "../App";

const Context = () => {
  const details = useContext(AppContext);

  return (
    <>
      {/*se houver detalhes, será executado*/}
      {details && (
        <div>
          <h2>Linguagem: {details.language}</h2>
          <h2>FW: {details.framework}</h2>
          <h2>QTD: {details.projects}</h2>
        </div>
      )}
    </>
  );
};

export default Context;
