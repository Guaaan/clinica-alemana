return (
            <li key={index}>
              <p>{medicamento.term}</p>
              {/* <p>Venta en Chile activa: {medicamento.status}</p> */}
              <img src={medicamento._links.self.href + ".jpeg"}></img>
            </li>
          );

{/* <style>
withStyles({
  item:{
    minWidth: "350px",
    margin: "1em",
    boxSIzing: "border-box"
  },
  media:{
    minWidth: "200px"
  }
})
</style> */}