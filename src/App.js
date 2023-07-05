import { useEffect, useState } from "react";
import "./App.css";
import { Characters } from "./components/characters";

function App() {
  const [characters, setCharacters] = useState([]);

  function getCharacters(pageNumber = 1) {
    const res = fetch("https://rickandmortyapi.com/api/character/?page=19")
      .then((response) => response.json())
      .then(({ results, info }) => {
        return { results };
      })
      .catch(() => {
        return [];
      });
    return res;
  }
  async function consoleCharacters() {
    const resp = await getCharacters();
    setCharacters(resp.results);
    // console.log(resp);
  }

  useEffect(() => {
    consoleCharacters();
  }, []);

  return (
    <div className="App">
      <header className="Header">
        <img className="Logo" src="/logo.jpg" alt="logo" />
        <h1 className="Terms">Terms + Conditions</h1>
      </header>
      <div className="Hero">
        <div>
          <h1>Rick and Morty</h1>
          <h1> See all the characters and more</h1>
        </div>
      </div>
      <main className="Main">
        <h1 className="Main-title">Character List</h1>
        <hr />
        <div className="Cards">
          {characters &&
            characters.length > 0 &&
            characters.map((character) => <Characters character={character} />)}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
