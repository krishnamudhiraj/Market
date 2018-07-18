import React, { Component } from "react";
// import _ from "lodash";
// import { connect } from "react-redux";
import scrollToComponent from "react-scroll-to-component";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "../../styles/common/mainContainer.scss";

const Apps = [
  {
    name: "starter Kit",
    desc: "jsdfs shbsfdhs sdvskdfhs sdsd ",
    price: 75
  },
  {
    name: "starter Kit2",
    desc: "jsdfs shbsfdhs sdvskdfhs sdsd ",
    price: 175
  },
  {
    name: "starter Kit3",
    desc: "jsdfs shbsfdhs sdvskdfhs sdsd ",
    price: 105
  },
  {
    name: "starter Kit4",
    desc: "jsdfs shbsfdhs sdvskdfhs sdsd ",
    price: 115
  },
  {
    name: "starter Kit5",
    desc: "jsdfs shbsfdhs sdvskdfhs sdsd ",
    price: 200
  }
];

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
            <h1 className="greenText">
              Premium Starter Kits for all your solutions
            </h1>
            {/*<p className="whiteText">
              solutions for your next iOS and Android project.
              </p>*/}
            <Button
              onClick={() =>
                scrollToComponent(this.AppComponent, {
                  offset: 0,
                  align: "top",
                  duration: 500
                })
              }
              bsClass="clsbutton"
            >
              Explore
            </Button>
          </div>
          <div className="mainRight" />
        </div>
        <div
          className="AppComponent"
          ref={section => {
            this.AppComponent = section;
          }}
        >
          <h1 className="appsHeading">Starter Kits</h1>
          <div className="appsContainer">
            {Apps.map((app, index) => (
              <div className="singleApp">
                <Link to={`/app_desc/${app.price}`}>
                  <div className="backImage" />
                  <div calssName="appInfo">
                    <div className="appDesc">
                      <h1 className="whiteText">{app.name}</h1>
                      <p className="whiteText">{app.desc}</p>
                    </div>
                    <div className="priceInfo">
                      <h1 className="whiteText">$ {app.price}</h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AppOverView;
// to={`/driver-profile/${item._id}`}
