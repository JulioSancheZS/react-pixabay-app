import React from 'react';
import 'bulma/css/bulma.css'
import Imagenes from './component/Pages/Imagenes';
import Sobre from './component/Pages/Sobre';
import Nav from './component/Organisms/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () =>(
  
      <Router>
        <Nav/>
        <Switch>
            <Route path="/" exact component={Imagenes}/>
            <Route path="/sobre" component={Sobre}/>
            <Route component={() => (
                <div className="container">
                  <h1 className="title mt-6">Error 404 </h1>
                  <span>Pagina no encontrada</span>
                </div>
            )}/>
        </Switch>
      </Router>

)

export default App;
