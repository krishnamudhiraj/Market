import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppOverView from "./pages/AppsOverView";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={AppOverView} />
    </div>
  </Router>
);

export default App;
