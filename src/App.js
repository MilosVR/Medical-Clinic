import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Departments from "./components/Department/Departments";
import Appointment from "./components/Appointment/Appointment";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/department" component={Departments} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
