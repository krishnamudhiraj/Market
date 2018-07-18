import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppOverView from "./pages/AppsOverView";
import AppDescription from "./pages/AppDescription";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={AppOverView} />
      <Route exact path="/app_desc/:Id" component={AppDescription} />
    </div>
  </Router>
);

export default App;
