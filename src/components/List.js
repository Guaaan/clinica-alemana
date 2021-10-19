import React, {Fragment} from "react";

function List({ medicData }) {
  return (
    <Fragment>
      <h1>lista de Medicamentos</h1>
      <ul>
          {medicData.map(medicamento => {
              return <li>{medicamento.term}</li>
          })}
      </ul>
    </Fragment>
  );
}

export default List;
