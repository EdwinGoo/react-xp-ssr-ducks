import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchCoinList } from "../store/ducks/CoinList";
import List from "Shared/components/List";

class ListContainer extends Component {
  static getInitialData() {
    return fetchCoinList();
  }

  componentDidMount() {
    const { fetchCoinList } = this.props;
    fetchCoinList();
  }

  render() {
    const { coin } = this.props;
    return <List coin={coin} />;
  }
}

const mapStateToProps = ({ coinList }) => ({
  coin: coinList.list
});

const mapDispatchToProps = dispatch => ({
  fetchCoinList: () => dispatch(fetchCoinList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
