import React from "react";
import { Route, Link } from "react-router-dom";
import SubPage from "../subPage";

const Page2 = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/subpage1`}>SubPage 1</Link>
      </li>
      <li>
        <Link to={`${match.url}/subpage2`}>SubPage 2</Link>
      </li>
      <li>
        <Link to={`${match.url}/subpage3`}>SubPage 3</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={SubPage} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);
export default Page2;
