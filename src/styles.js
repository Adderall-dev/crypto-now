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

export const Filters = styled.div``;
