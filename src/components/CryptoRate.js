import React, { useEffect } from "react";
import { Table } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins } from "../redux/ducks/coin";
//components
import CryptoRateCard from "./CryptoRateCard";
import CryptoFilters from "./CryptoFilters";

const CryptoRate = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.coin.limit);

  useEffect(() => {
    dispatch(fetchCoins(limit));
  }, [limit]);

  const coinData = useSelector((state) => state.coin.coins);

  return coinData.loading ? (
    <h1>...</h1>
  ) : coinData.error ? (
    <h1>{coinData.error}</h1>
  ) : (
    <div>
      <CryptoFilters />
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Currency</th>
            <th>Currency name</th>
            <th>Price</th>
            <th>Change 24h</th>
          </tr>
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
