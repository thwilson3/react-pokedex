function Pokedex(props) {
  return props.map((card) => (
    <div className="Pokemon">
      <h3 className="Pokemon-name">{card.name} </h3>
      <img
        className="Pokemon-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
        alt="pokemon"
      />
      <p className="Pokemon-type">type: {card.type}</p>
      <p className="Pokemon-exp">EXP: {card.base_experience}</p>
    </div>
  ));
};
