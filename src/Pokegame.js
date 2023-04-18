import Pokedex from "./Pokedex";
import "./Pokegame.css";
import IsWinner from "./CheckWinner";

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
    <div className="Pokegame-container">
      <div className="Pokegame-winner">
        <IsWinner set1={set1} set2={set2} />
      </div>
      <div className="Pokegame-board">
        <div className="Pokegame-p1">
          <h2>Player 1</h2>
          <Pokedex cards={set1} />
        </div>
        <div className="Pokegame-p2">
          <h2>Player 2</h2>
          <Pokedex cards={set2} />
        </div>
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
