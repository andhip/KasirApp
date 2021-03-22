import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavComponent } from "./components";
import { Home, Sukses } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavComponent></NavComponent>
        <main>
          <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="/sukses" component={Sukses}></Route>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
