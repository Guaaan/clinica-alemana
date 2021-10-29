import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import {Link} from 'react-router-dom';

//recibe los datos de List.js
function MedicCard({ nombre, id, proveedor, extended, sabor }) {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Link to="/medicamento-info/1"><Card.Title>{nombre}</Card.Title></Link>
        <Card.Text>Id: {id}</Card.Text>
        <Card.Text>Proveedor: {proveedor}<br />{extended} <br/> {sabor}</Card.Text>
        <Card.Text></Card.Text>
        {/* <Button href={enlace} variant="primary">Link</Button> */}
      </Card.Body>
    </Card>
  );
}

export default MedicCard;
