import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import Words from "./components/words";
import NavBar from "./components/navBar";
import { ToastContainer } from "react-toastify";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
