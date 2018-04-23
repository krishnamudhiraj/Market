import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppOverView from "./pages/AppsOverView";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={AppOverView} />
    </div>
  </Router>
);

export default App;
