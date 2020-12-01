import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyle } from "./globalStyle";
import { Title, Wrapper } from "./styles";

//components
import CryptoRate from "./components/CryptoRate";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>
          Crypto<span>.now</span>
        </Title>
        <CryptoRate />
      </Wrapper>
    </>
  );
};

export default App;
