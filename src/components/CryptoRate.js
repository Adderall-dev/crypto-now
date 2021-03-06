import React, { useEffect } from "react";
import { Table } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins } from "../redux/ducks/coin";

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
            coinData.data.coins.map((coin) => (
              <tr key={coin.id}>
                <CryptoRateCard coin={coin} base={coinData.data.base} />
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CryptoRate;
