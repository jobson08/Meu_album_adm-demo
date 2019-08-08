import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
//import './index.css';

import RTLLayout from "../src/layout/RTL";

import "./assets/css/black-dashboard-react.css"
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/rtl" render={props => <RTLLayout {...props} />} />
      <Redirect from="/" to="/rtl/Home" />
      <Redirect from="/AddImagens" to="/rtl/AddImagens" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

