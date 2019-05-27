import React, { Component } from "react";
import * as constant from "../../constant/constant";

import Header from '../../component/header/';
import CardItem from '../../component/cardItem';
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {history, list, votePostUp, votePostDown} = this.props;
    let dataList = list.slice(0, 20);
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
        { dataList && dataList.length > 0 && dataList.map((item, index) => (
          <CardItem 
            item={item}
            votePostUp={votePostUp}
            votePostDown={votePostDown}
            key={index}
          />
        ))}
        </div>
      </div>
    );
  }
}
