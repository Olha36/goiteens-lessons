import React, { Component } from "react";
import styled from "styled-components";

const SearchForm = styled.div`
  margin-bottom: 20px;

  input {
    padding: 8px;
    width: 60%;
    margin-right: 10px;
  }

  button {
    padding: 8px 16px;
    cursor: pointer;
  }
`;

class GifSearch extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleClick = () => {
    const { inputValue } = this.state;
    if (inputValue.trim()) {
      this.props.onSearch(inputValue);
    }
  };

  render() {
    return (
      <SearchForm>
        <input
          type="text"
          placeholder="Введіть ключове слово..."
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Пошук</button>
      </SearchForm>
    );
  }
}

export default GifSearch;
