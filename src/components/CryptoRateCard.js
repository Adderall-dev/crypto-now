import React from "react";
import { Td } from "../styles";
import arrDown from "../assets/down-arrow.png";
import arrUp from "../assets/up-arrow.png";

function CryptoRateCard({ coin, base }) {
  const { iconUrl, name, change, price } = coin;
  const { symbol } = base;
  return (
    <>
      <td>
        <img src={iconUrl} alt={symbol} />
      </td>
      <td>
        <p>{coin.symbol}</p>
      </td>
      <td>{name}</td>
      <td>
        {symbol}&nbsp;
        {Math.round(price * 100) / 100}
      </td>
      {change < 0 ? (
        <Td color="red">
          <img src={arrDown} />
          {change}%
        </Td>
      ) : (
        <Td color="green">
          <img src={arrUp} />
          {change}%
        </Td>
      )}
    </>
  );
}

export default CryptoRateCard;
