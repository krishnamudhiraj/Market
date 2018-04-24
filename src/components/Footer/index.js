import React, { Component } from "react";
// import _ from "lodash";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "../../styles/common/footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerDesc">
          <div className="footerText">Support</div>
          <div className="footerText">Related Links</div>
          <div className="footerText">Notifications</div>
        </div>
        <div className="footerBody">
          <div className="footerCont">
            <div>sdvsdjvhbshdvsk</div>
            <div>sdvsdjvhbshdvsk</div>
            <div>sdvsdjvhbshdvsk</div>
          </div>
          <div className="footerCont">
            <div>sdvsdjvhbshdvsk</div>
            <div>sdvsdjvhbshdvsk</div>
            <div>sdvsdjvhbshdvsk</div>
          </div>
          <div className="footerCont">
            <div>sdvsdjvhbshdvsk</div>
            <div>sdvsdjvhbshdvsk</div>
            <div>sdvsdjvhbshdvsk</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
