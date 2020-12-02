import React from "react";

function CryptoRateCard({ coin }) {
  return (
    <>
      <td>
        <img src={coin.iconUrl} alt={coin.symbol} />
      </td>
      <td>
        <p>{coin.symbol}</p>
      </td>
      <td>{coin.name}</td>
      <td>$ {Math.round(coin.price * 100) / 100}</td>
      <td>{coin.change}%</td>
    </>
  );
}

export default CryptoRateCard;
