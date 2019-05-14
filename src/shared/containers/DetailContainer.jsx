import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCoinDetail, clearCoinDetail } from "../store/ducks/CoinDetail";
import Detail from "Shared/components/Detail";

class DetailContainer extends Component {
  componentDidMount() {
    const { detail, dispatch, history } = this.props;
    const { params } = this.props.match;
    // if client controls the application, this should be called!
    if (!detail[0].name) {
      dispatch(fetchCoinDetail(params.name.toLowerCase())).then(result => {
        if (result.error) {
          history.replace("/");
        }
      });
    }
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearCoinDetail());
  }

  render() {
    const { detail } = this.props;
    return <Detail detail={detail} />;
  }
}

const mapStateToProps = ({ coinDetail }) => ({
  detail: coinDetail.detail
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);
