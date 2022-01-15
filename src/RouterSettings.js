import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import {Login} from './Pages/Login';
import React from "react";
import {Register} from './Pages/Register'
import { NotFound } from "./Pages/NotFound";

export const RouterSettings = () => {
  return (
    <div>
      <Router>
        <div className={"app"}>
          <Switch>
          <Route exact path="/"  >
              <Home/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="*" exact={true} >
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
