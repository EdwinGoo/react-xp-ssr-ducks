import { RSAA } from "redux-api-middleware";

export const FETCH_COIN_DETAIL = "FETCH_COIN_DETAIL";
export const FETCH_COIN_DETAIL_SUCCESS = "FETCH_COIN_DETAIL_SUCCESS";
export const FETCH_COIN_DETAIL_FAILURE = "FETCH_COIN_DETAIL_FAILURE";
export const CLEAR_COIN_DETAIL = "CLEAR_COIN_DETAIL";

const initialState = {
  detail: [
    {
      name: "",
      symbol: "",
      rank: "",
      price_usd: "",
      price_krw: "",
      last_updated: ""
    }
  ]
};

export const fetchCoinDetail = name => {
  const parsedName = name.split(" ");
  return {
    [RSAA]: {
      types: [
        FETCH_COIN_DETAIL,
        FETCH_COIN_DETAIL_SUCCESS,
        FETCH_COIN_DETAIL_FAILURE
      ],
      endpoint: `https://api.coinmarketcap.com/v1/ticker/${parsedName.join(
        "-"
      )}/?convert=KRW`,
      method: "GET"
    }
  };
};

export const clearCoinDetail = () => {
  return {
    type: CLEAR_COIN_DETAIL,
    payload: initialState.detail
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload
      };
    case FETCH_COIN_DETAIL_FAILURE:
      return {
        ...state
      };
    case CLEAR_COIN_DETAIL:
      return {
        ...state,
        detail: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
