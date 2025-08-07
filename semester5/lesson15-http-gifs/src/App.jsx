import React, { Component } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial;
`;

class App extends Component {
  state = {
    keyword: "cats",
  };

  handleSearch = (newKeyword) => {
    this.setState({ keyword: newKeyword });
  };

  render() {
    const { keyword } = this.state;
    return (
      <AppContainer>
        <h1>Giphy Search App</h1>
        <GifSearch onSearch={this.handleSearch} />
        <GifList keyword={keyword} />
      </AppContainer>
    );
  }
}

export default App;
