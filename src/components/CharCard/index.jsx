import "./styles.css";

function CharCard({ character }) {
  return character.status === "Alive" ? (
    <div className="cardsAqua">
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt="imagem dos personagens de ricky and morty"
      />
    </div>
  ) : (
    <div className="cardsRed">
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt="imagem dos personagens de ricky and morty"
      />
    </div>
  );
}

export default CharCard;
