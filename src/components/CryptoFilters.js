import React from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup } from "../styles";
import { selectLimit } from "../redux/ducks/coin";

const CryptoFilters = () => {
  const dispatch = useDispatch();
  return (
    <ButtonGroup>
      <span>Amount of coins: </span>
      <button onClick={() => dispatch(selectLimit(10))}>10</button>
      <button onClick={() => dispatch(selectLimit(20))}>20</button>
      <button onClick={() => dispatch(selectLimit(50))}>50</button>
    </ButtonGroup>
  );
};

export default CryptoFilters;
