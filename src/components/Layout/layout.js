import React from "react";
import "../../styles/common/mainContainer.scss";
import Header from "../Header";
import Footer from '../Footer'

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
        <Footer />
      </div>
    );
  }
}

export default Layout;
