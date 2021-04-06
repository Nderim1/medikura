import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import Words from "./components/words";
import NavBar from "./components/navBar";
import { ToastContainer } from "react-toastify";
//import configureStore from "./store/configureStore";
//const store = configureStore();
class App extends Component {
  state = { counters: [{ id: 0, value: 0 }] };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/words" component={Words} />

            <Route path="/not-found" component={NotFound} />

            <Redirect from="/" exact to="/words" />
            <Redirect to="/not-found" />
          </Switch>
        </main>

        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default App;
