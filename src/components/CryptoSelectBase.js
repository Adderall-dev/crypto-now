import React from "react";
import { ButtonGroup } from "../styles";
import { useDispatch } from "react-redux";
import { selectBase } from "../redux/ducks/coin";

const CryptoSelectBase = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ButtonGroup>
        <span>Currency: </span>
        <button onClick={() => dispatch(selectBase("USD"))}>USD</button>
        <button onClick={() => dispatch(selectBase("EUR"))}>EUR</button>
        <button onClick={() => dispatch(selectBase("PLN"))}>PLN</button>
      </ButtonGroup>
    </div>
  );
};

export default CryptoSelectBase;
