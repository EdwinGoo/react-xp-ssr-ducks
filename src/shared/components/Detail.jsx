import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Detail extends Component {
  render() {
    const { detail } = this.props;
    const info = detail[0];
    return (
      <div className="coin-detail-container">
        <h1>This is {info.name} Detail</h1>
        <ul className="coin-list">
          <li>symbol: {info.symbol}</li>
          <li>rank: {info.rank}</li>
          <li>price_usd: {info.price_usd}</li>
          <li>price_krw: {info.price_krw}</li>
          <li>last_updated: {info.last_updated}</li>
        </ul>
        <Link to="/">GO BACK TO LIST</Link>
      </div>
    );
  }
}

export default withRouter(Detail);
