import React, { Component } from "react";
// import _ from "lodash";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "../../styles/common/header.scss";

class AppOverView extends Component {
  render() {
    return (
      <div className="animate">
        {/* <Grid>
          <Row>
            <Col md={6} className="productDesc">
              <h1 className="greenText">Premium React Native Starter Kits</h1>
              <p className="whiteText">
                Turnkey solutions for your next iOS and Android project.
              </p>
              <Button>
                Discover
              </Button>
            </Col>
            <Col md={6}>
              <h1 className="greenText">Premium React Native Starter Kits</h1>
            </Col>
          </Row>
        </Grid> */}
        <div className="main">
         <div className="mainLeft">
              <h1 className="greenText">Premium Starter Kits for all your solutions</h1>
              <p className="whiteText">
              solutions for your next iOS and Android project.
              </p>
              <Button bsClass="clsbutton">
                Explore
              </Button>
         </div>
         <div className="mainRight" />
        </div>
      </div>
    );
  }
}

export default AppOverView;
