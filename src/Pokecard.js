function Pokecard({ card }) {
  return (
    <div className="Pokemon">
      <h3 className="Pokemon-name">{card.name} </h3>
      <img
        className="Pokemon-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
        alt="pokemon"
      />
      <p className="Pokemon-type">Type: {card.type}</p>
      <p className="Pokemon-exp">EXP: {card.base_experience}</p>
    </div>
  );
}

export default Pokecard;
