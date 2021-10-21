import React from "react";
import { Switch , Route } from 'react-router-dom';
import Home from "./components/Home";
import MedicInfoContainer from "./containers/MedicInfoContainer";


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="medicamento-info/:medicIndex" component={MedicInfoContainer} />
        </Switch>
    )
}

export default Routes;