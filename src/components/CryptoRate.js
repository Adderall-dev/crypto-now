import React, { useEffect } from "react";
import { Table } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import coin, { fetchCoins } from "../redux/ducks/coin";
//components
import CryptoRateCard from "./CryptoRateCard";

const CryptoRate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  const coinData = useSelector((state) => state.coin.coins);
  return coinData.loading ? (
    <h1>...</h1>
  ) : coinData.error ? (
    <h1>{coinData.error}</h1>
  ) : (
    <div>
      <Table>
        <thead>
          <th>Currency name</th>
          <th>Price</th>
        </thead>
        <tbody>
          {coinData &&
            coinData.data &&
            coinData.data.coins.map((coin) => (
              <tr>
                <CryptoRateCard key={coin.id} coin={coin} />
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CryptoRate;
