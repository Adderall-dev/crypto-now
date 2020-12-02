import axios from "axios";

const FETCH_COINS_SUCCESS = "coin/fetchCoinsSuccess";
const FETCH_COINS_REQUEST = "coin/fetchCoinsRequest";
const FETCH_COINS_FAILURE = "coin/fetchCoinsFailure";
const SELECT_LIMIT = "coin/selectLimit";

const initialState = {
  loading: false,
  coins: [],
  error: "",
  limit: 10,
};
// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COINS_REQUEST:
      return { ...state, loading: true };
    case FETCH_COINS_SUCCESS:
      return { ...state, loading: false, coins: payload, error: "" };
    case FETCH_COINS_FAILURE:
      return { ...state, loading: false, coins: [], error: payload };
    case SELECT_LIMIT:
      return { ...state, limit: payload };
    default:
      return state;
  }
};

export const fetchCoinsSuccess = (coins) => ({
  type: FETCH_COINS_SUCCESS,
  payload: coins,
});

export const fetchCoinsRequest = () => ({
  type: FETCH_COINS_REQUEST,
});

export const fetchCoinsFailure = (error) => ({
  type: FETCH_COINS_FAILURE,
  payload: error,
});

export const selectLimit = (limit) => ({
  type: SELECT_LIMIT,
  payload: limit,
});

export const fetchCoins = (limit) => {
  return (dispatch) => {
    dispatch(fetchCoinsRequest);
    axios
      .get(
        `https://api.coinranking.com/v1/public/coins?sort=coinranking&limit=${limit}`
      )
      .then((res) => {
        const users = res.data;
        dispatch(fetchCoinsSuccess(users));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchCoinsFailure(errMsg));
      });
  };
};