import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Departments from "./components/Department/Departments";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/department" component={Departments} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
