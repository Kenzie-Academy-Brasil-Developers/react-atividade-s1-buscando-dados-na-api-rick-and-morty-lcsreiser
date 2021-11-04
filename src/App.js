import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/").then((response) =>
      response.json().then((response) => setCharacterList(response.results))
    );
  }, []);
  return (
    <div>
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
