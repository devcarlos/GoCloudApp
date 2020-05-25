import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from "./components/landing";
import Subscription from "./components/subscription";

class App extends React.Component {
  render() {
    return (<Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <img className="navbar-brand cpech-image" src="/logo.png" alt="logo" />
            <Link className="navbar-brand" to={"/landing"}>Inicio</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/landing"}>Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/subscription"}>Subscripciones</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="header-title">
          <h1>Cursos de Verano +NEM</h1>
          <h5>No dejes de pasar esta increíble oportunidad. Inscribite acá</h5>
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path="/landing" component={Landing} />
              <Route path="/subscription" component={Subscription} />
            </Switch>
          </div>
        </div>
      </div></Router>
    );
  }
}

export default App;
