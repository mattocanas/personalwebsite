import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";
import Notes from "./components/Notes";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <About />
          </Route>
          <Route path='/work'>
            <Work />
          </Route>
          <Route path='/notes'>
            <Notes />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
