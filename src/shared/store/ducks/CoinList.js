import { RSAA } from "redux-api-middleware";

const FETCH_COIN_LIST = "FETCH_COIN_LIST";
const FETCH_COIN_LIST_SUCCESS = "FETCH_COIN_LIST_SUCCESS";
const FETCH_COIN_LIST_FAILURE = "FETCH_COIN_LIST_FAILURE";

const initialState = {
  list: []
};

export const fetchCoinList = () => ({
  [RSAA]: {
    types: [FETCH_COIN_LIST, FETCH_COIN_LIST_SUCCESS, FETCH_COIN_LIST_FAILURE],
    endpoint: "https://api.coinmarketcap.com/v1/ticker/?convert=KRW&limit=10",
    method: "GET"
  }
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case FETCH_COIN_LIST_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
