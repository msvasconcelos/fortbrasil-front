import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddInstitution from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Notfound from "./components/notfound-tutorial.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/tutorials" className="navbar-brand">
              FortBrasil
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Registrar
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                  Estabelecimento
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Adicionar
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
              <Route exact path="/add" component={AddInstitution} />
              <Route path="/tutorials/:id" component={Tutorial} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;