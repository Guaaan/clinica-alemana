import React, { Fragment } from "react";

function List({ medicdata }) {
  return (
    <Fragment>
      <h1>lista de Medicamentos</h1>
      <ul>
        {medicdata.map((medicamento, index) => {
          return <li key={index}>{medicamento.term}</li>;
        })}
      </ul>
    </Fragment>
  );
}

export default List;
