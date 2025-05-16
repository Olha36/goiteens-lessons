import styled from "styled-components";

export const Container = styled.div`
  background-color: #ec35ec;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  color: blue;
  border: 5px dashed yellow;
`;

export const Text = styled.p`
  font-size: 3rem;
  color: red;
  text-decoration: underline;
  &:hover {
    color: white; //
  }
`;

export const Paragraph = styled.p`
  color: orange;
  font-size: 2rem;
  &:hover {
  transform: scale(2);
  }
`