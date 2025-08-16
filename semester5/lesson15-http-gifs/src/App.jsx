import React from "react";
import GifSearch from "./GifSearch";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial;
`;

const App = () => (
  <AppContainer>
    <h1>Giphy Search App</h1>
    <GifSearch defaultKeyword="cats" />
  </AppContainer>
);

export default App;
