import React, { useEffect } from "react";
import { Table } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import coin, { fetchCoins } from "../redux/ducks/coin";
//components
import CryptoRateCard from "./CryptoRateCard";
import CryptoFilters from "./CryptoFilters";
import CryptoTableHeader from "./CryptoTableHeader";
import CryptoSelectBase from "./CryptoSelectBase";

const CryptoRate = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.coin.limit);
  const baseCurr = useSelector((state) => state.coin.baseCurr);

  useEffect(() => {
    dispatch(fetchCoins(limit, baseCurr));
    // eslint-disable-next-line
  }, [limit, baseCurr]);

  const coinData = useSelector((state) => state.coin.coins);
  const baseCurrData = coinData;

  return coinData.loading ? (
    <h1>...</h1>
  ) : coinData.error ? (
    <h1>{coinData.error}</h1>
  ) : (
    <div>
      <CryptoFilters />
      <CryptoSelectBase />
      <Table>
        <thead>
          <CryptoTableHeader />
        </thead>
        <tbody>
          {coinData &&
            coinData.data &&
            baseCurrData.data.base &&
            coinData.data.coins.map((coin) => (
              <tr>
                <CryptoRateCard
                  key={coin.id}
                  coin={coin}
                  base={baseCurrData.data.base}
                />
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CryptoRate;
