import  { useState, useEffect } from "react";

const DisneyCharacters = () => {
  const [characters, setCharacters] = useState([]); // To store the data
  const [loading, setLoading] = useState(true); // To show a loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    // Function to fetch data
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://api.disneyapi.dev/character");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON response
        setCharacters(data.data); // The API returns data inside `data`
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Hide loading spinner
      }
    };

    fetchCharacters();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Render different states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Disney Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character._id}>
            <strong>{character.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisneyCharacters;
