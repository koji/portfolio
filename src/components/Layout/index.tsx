import * as React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import "../..//styles/index.scss";
import layoutStyles from "./layout.module.scss";

export default class Layout extends React.Component {
  render() {
    return (
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
