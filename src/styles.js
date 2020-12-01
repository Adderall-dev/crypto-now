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
  td,
  th {
    text-align: left;
    padding: 0.5em;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  & span {
    color: #ff9999;
  }
`;
