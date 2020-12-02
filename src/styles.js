import styled from "styled-components";

/* colors: 
  #ffc8c8
  #ff9999
  #444f5a
  #3e4149
 */

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  border-spacing: 1em;
  td,
  th {
    border-collapse: collapse;
    padding: 0.5em;
  }

  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  & span {
    color: #ff9999;
  }
`;

export const Filters = styled.div`
  width: 45%;
  button {
    padding: 0.8em;
    margin: 0.2em;
    border: none;
    border-radius: 10px;
    background: #ffc8c8;
    box-shadow: 1px 1px 2px #c79c9c, -1px -1px 2px #fff4f4;
    &:hover {
      border-radius: 10px;
      background: #ffc8c8;
      box-shadow: inset 1px 1px 2px #c79c9c, inset -1px -1px 2px #fff4f4;
      cursor: pointer;
    }
  }
`;
