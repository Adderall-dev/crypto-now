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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Td = styled.td`
  color: ${(props) => props.color || "black"};
  img {
    position: relative;
    color: ${(props) => props.color || "black"};
    transform: scale(0.5);
    top: 0.25em;
  }
`;

export const Table = styled.table`
  border-spacing: 0.4em;
  border-collapse: collapse;
  td,
  th {
    padding: 0.5em;
  }

  tr:nth-child(even) {
    background-color: #ffc8c8;
  }

  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    th:nth-child(2) {
      display: none;
    }
    td:first-child,
    td:nth-child(2) {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  & span {
    color: #ff9999;
  }
`;

export const ButtonGroup = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

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
