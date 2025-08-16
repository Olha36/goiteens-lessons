import { useState, useEffect } from "react";

const url = "https://api.chucknorris.io/jokes/random";
export default function JokeFetcher() {
  const [joke, setJoke] = useState("Loading...");
  const fetchJoke = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setJoke(data.value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Новий жарт</button>
    </div>
  );
}
