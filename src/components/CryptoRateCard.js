import React from "react";

function CryptoRateCard({ coin }) {
  return (
    <>
      <td>{coin.name}</td>
      <td>$ {Math.round(coin.price * 100) / 100}</td>
    </>
  );
}

export default CryptoRateCard;
