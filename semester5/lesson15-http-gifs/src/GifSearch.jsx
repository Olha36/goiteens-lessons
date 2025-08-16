import React, { Component } from "react";
import axios from "axios";

class GifSearch extends Component {
  state = {
    inputValue: "",
    gifs: [],
    loading: false,
    error: null,
    page: 0,
    limit: 12,
    keyword: this.props.defaultKeyword || "cats",
  };

  componentDidMount() {
    this.fetchGifs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.keyword !== this.state.keyword ||
      prevState.page !== this.state.page
    ) {
      this.fetchGifs();
    }
  }

  fetchGifs = async () => {
    const API_KEY = "azBB9R6wPh6hWK1zHs1fSixh8BYhNqgo";
    const { keyword, page, limit } = this.state;
    const offset = page * limit;

    this.setState({ loading: true, error: null });

    try {
      const endpoint = keyword.trim()
        ? "https://api.giphy.com/v1/gifs/search"
        : "https://api.giphy.com/v1/gifs/trending";

      const response = await axios.get(endpoint, {
        params: {
          api_key: API_KEY,
          ...(keyword.trim() && { q: keyword }),
          limit,
          offset,
        },
      });

      this.setState({ gifs: response.data.data });
    } catch (err) {
      this.setState({ error: "Не вдалося завантажити гіфки" });
      console.error(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = () => {
    const { inputValue } = this.state;
    if (inputValue.trim()) {
      this.setState({ keyword: inputValue, page: 0 });
    }
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleNext = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  handlePrev = () => {
    this.setState((prev) => ({ page: Math.max(prev.page - 1, 0) }));
  };

  render() {
    const { gifs, loading, error, page, inputValue, keyword } = this.state;

    return (
      <div className="gif-search">
        <div className="search-form">
          <input
            type="text"
            placeholder="Введіть ключове слово..."
            value={inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSearch}>Пошук</button>
        </div>

        {loading && <p className="loading">Завантаження...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && <h2>Результати для: {keyword}</h2>}

        <div className="gif-grid">
          {gifs.map((gif) => (
            <img
              key={gif.id}
              src={gif.images.fixed_height_downsampled.url}
              alt={gif.title}
              className="gif-item"
            />
          ))}
        </div>

        <div className="pagination">
          <button onClick={this.handlePrev} disabled={page === 0}>
            ⬅️ Назад
          </button>
          <span>Сторінка: {page + 1}</span>
          <button onClick={this.handleNext}>Вперед ➡️</button>
        </div>
      </div>
    );
  }
}

export default GifSearch;
