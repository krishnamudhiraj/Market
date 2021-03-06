import React, { Component } from "react";
// import { FormattedMessage, defineMessages, intlShape } from "react-intl";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { Navbar, NavItem, MenuItem, Nav, NavDropdown } from "react-bootstrap";
// import { Link, withRouter } from "react-router-dom";
import Headroom from "react-headroom";
import "../../styles/common/header.scss";

class Header extends Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React/Flutter Market</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {/*<Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown
                eventKey={3}
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>*/}
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
