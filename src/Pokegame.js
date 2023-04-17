import Pokedex from "./Pokedex";

function Pokegame({ cards }) {
  let set1 = [];
  let set2 = [];

  if (cards.length % 2 !== 0) {
    cards.pop();
  }

  while (set1.length <= cards.length / 2 + 1) {
    let index = getRandomCardId(cards);
    set1.push(cards[index]);
    cards.splice(index, 1);
  }

  while (cards.length > 0) {
    let index = getRandomCardId(cards);
    set2.push(cards[index]);
    cards.splice(index, 1);
  }

  return (
    <div className="Pokegame-board">
      <div className="Pokegame-p1">
        <Pokedex cards={set1} />
      </div>
      <div className="Pokegame-p2">
        <Pokedex cards={set2} />
      </div>
    </div>
  );
}

function getRandomCardId(cards) {
  const cardIndex = Math.floor(Math.random() * cards.length);
  return cardIndex;
}

export default Pokegame;
export { getRandomCardId };
