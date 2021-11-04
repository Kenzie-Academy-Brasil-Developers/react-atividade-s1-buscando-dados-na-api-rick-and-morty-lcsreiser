import "./styles.css";
import CharCard from "../CharCard";

function Characters({ characterList }) {
  return (
    <div className="divContainer">
      <h2>Meus Personagens</h2>
      {characterList.map((character) => (
        <CharCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Characters;
