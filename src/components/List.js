import React, { Fragment } from "react";
import MedicCard from "./MedicCard";
import { Row, Col } from "react-bootstrap";

function List({ medicdata }) {
  return (
    <Fragment>
      <h1>lista de Medicamentos</h1>
      <Row xs={1} md={5} className="g-4">
        {medicdata.map((medicamento, index) => {
          return (
            <Col>
              <MedicCard nombre={medicamento.term} id={medicamento.id} proveedor={medicamento.supplier} />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
}

export default List;
