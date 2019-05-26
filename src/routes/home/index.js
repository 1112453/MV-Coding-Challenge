import React, { Component } from "react";
import {  } from "@material-ui/core/";
import {  } from "@material-ui/icons/";
import * as constant from "../../constant/constant";

import Header from '../../component/header/';
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {history} = this.props;
    return (
      <div className="container">
        <div
          className="home"
          style={{
            paddingTop: constant.mainHeaderHeight,
            paddingBottom: constant.mainFooterHeight
          }}
        >
        <Header 
          history={history}
        />
        </div>
      </div>
    );
  }
}
