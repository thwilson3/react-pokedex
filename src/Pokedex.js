import Pokecard from "./Pokecard";

function Pokedex(props) {
  return props.cards.map((card) => <Pokecard card={card} />);
};

export default Pokedex;