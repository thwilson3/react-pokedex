import "./Pokecard.css";

/** Component Pokecard
 *
 *  Accepts a prop, card, an object with data on a single Pokemon.
 *
 *  Shows a single Pokemon, with their name, image, and type.
 */

function Pokecard({ card }) {
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{card.name} </h3>
      <img
        className="Pokecard-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
        alt="pokemon"
      />
      <p className="Pokecard-type">Type: {card.type}</p>
      <p className="Pokecard-exp">EXP: {card.base_experience}</p>
    </div>
  );
}

export default Pokecard;
