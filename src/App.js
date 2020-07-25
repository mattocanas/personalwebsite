import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
