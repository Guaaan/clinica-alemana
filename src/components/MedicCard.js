import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import {Link} from 'react-router-dom';

function MedicCard({ nombre, id, proveedor }) {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Link to="/medicamento-info/1"><Card.Title>{nombre}</Card.Title></Link>
        <Card.Text>Id: {id}</Card.Text>
        <Card.Text>Proveedor: {proveedor}</Card.Text>
        {/* <Button href={enlace} variant="primary">Link</Button> */}
      </Card.Body>
    </Card>
  );
}

export default MedicCard;
