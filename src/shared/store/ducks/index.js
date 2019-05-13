import { combineReducers } from "redux";
import coinList from "./CoinList";
import coinDetail from "./CoinDetail";

export default combineReducers({
  coinList,
  coinDetail
});
