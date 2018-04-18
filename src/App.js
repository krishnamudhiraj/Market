import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Page1</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
        <li>
          <Link to="/page3">Page3</Link>
        </li>
      </ul>

      <Button bsStyle="primary">Test bootstrap</Button>
      <hr />

      <Route exact path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </div>
  </Router>
);

export default App;
