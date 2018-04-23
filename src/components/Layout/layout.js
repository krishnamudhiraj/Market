import React, { PropTypes } from "react";
import "../../styles/common/mainContainer.scss";
import Header from "../Header";

class Layout extends React.Component {
//   static propTypes = {
//     //  children: PropTypes.node.isRequired
//   };

  render() {
    return (
      <div className="dashboard-page dashboardPage">
        <Header />
        <section id="bodyContainer" className="uiView bodyContainer">
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Layout;
