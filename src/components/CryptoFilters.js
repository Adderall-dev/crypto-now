import React from "react";
import { useDispatch } from "react-redux";
import { Filters } from "../styles";
import { selectLimit } from "../redux/ducks/coin";

const CryptoFilters = () => {
  const dispatch = useDispatch();
  return (
    <Filters>
      <span>Limit: </span>
      <button onClick={() => dispatch(selectLimit(10))}>10</button>
      <button onClick={() => dispatch(selectLimit(20))}>20</button>
      <button onClick={() => dispatch(selectLimit(50))}>50</button>
    </Filters>
  );
};

export default CryptoFilters;