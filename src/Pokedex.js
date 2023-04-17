import Pokecard from "./Pokecard";

/** Component Pokedex
 *
 *  Is provided, via props, an array of objects describing different pokemon,
 *  and renders a sequence of Pokecard components.
 *
 */

function Pokedex(props) {
  return props.cards.map((card) => <Pokecard card={card} />);
}

export default Pokedex;
