import { connect } from "react-redux";
import { fetchCoinList } from "./store/ducks/CoinList";
import List from "Shared/List";

const mapStateToProps = ({ coinList }) => ({
  coin: coinList.list
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
