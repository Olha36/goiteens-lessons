
import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const GifGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
`;

const GifItem = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    padding: 6px 12px;
    cursor: pointer;
  }
`;

const ErrorText = styled.p`
  color: red;
`;

const Loading = styled.p`
  font-style: italic;
`;

class GifList extends Component {
  state = {
    gifs: [],
    loading: false,
    error: null,
    page: 0,
    limit: 12,
  };

  componentDidMount() {
    this.fetchGifs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.keyword !== this.props.keyword ||
      prevState.page !== this.state.page
    ) {
      this.fetchGifs();
    }
  }

  fetchGifs = async () => {
    const API_KEY = "azBB9R6wPh6hWK1zHs1fSixh8BYhNqgo";
    const { keyword } = this.props;
    const { page, limit } = this.state;
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
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleNext = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  handlePrev = () => {
    this.setState((prev) => ({ page: Math.max(prev.page - 1, 0) }));
  };

  render() {
    const { gifs, loading, error, page } = this.state;

    return (
      <div>
        {loading && <Loading>Завантаження...</Loading>}
        {error && <ErrorText>{error}</ErrorText>}

        <GifGrid>
          {gifs.map((gif) => (
            <GifItem
              key={gif.id}
              src={gif.images.fixed_height_downsampled.url}
              alt={gif.title}
            />
          ))}
        </GifGrid>

        <Pagination>
          <button onClick={this.handlePrev} disabled={page === 0}>
            ⬅️ Назад
          </button>
          <span>Сторінка: {page + 1}</span>
          <button onClick={this.handleNext}>Вперед ➡️</button>
        </Pagination>
      </div>
    );
  }
}

export default GifList;
