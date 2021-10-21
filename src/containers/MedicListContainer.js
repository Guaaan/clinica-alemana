import React, { Component } from "react";
import axios from "axios";
import List from "../components/List";

class MedicListContainer extends Component {
  state = {
    medicData: []
  }

  componentDidMount() {
    //consulta get axios con headers
      axios.get(
          "https://gtw-prod.alemana.io/public/api-farmacos/v1/ampp?q=amoxi&status=true&attr=category%2C%20subcategory%2C%20synonyms%2C%20marketed%2C%20device%2C%20flavour%2C%20supplier%2C%20extended%2C%20pack_quantity%2C%20pack_quantity_unit%2C%20substances%2C%20vtm%2C%20vmp%2C%20amp%2C%20vmpp%2C%20tf%2C%20tfg&maps=tfc&refset=1002%2C%201003%2C%201004%2C%201005%2C%201006",{
            headers: {"X-API-Key": "5e1dc5891a05f000011faf522daf1a4785e04b3ab708d2da1fc7ea4c"},
          })
        .then(res => {
          const medicData = res.data._embedded.ampp;
          //const medicLink = res.data._embedded.vmpp._links.self.href;
          this.setState({
            medicData
          });
        })
        .catch((error) => {
          console.log(error);
        });
    
  }
  render() {
    const { medicData } = this.state;
    return (
      
        <List medicdata={ medicData } />
      
    );
  }
}

export default MedicListContainer;
