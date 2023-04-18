function IsWinner({ set1, set2 }) {
  console.log("set1", set1, "set2", set2);
  const p1score = set1.reduce((acc, curr) => acc + curr.base_experience, 0);
  const p2score = set2.reduce((acc, curr) => acc + curr.base_experience, 0);
  console.log("p1score", p1score, "p2score", p2score);

  return (
    <div className="IsWinner-winner">
      {p1score > p2score ? (
        <div>
          <h2>Player 1 Wins!</h2>
        </div>
      ) : (
        <div>
          <h2>Player 2 Wins!</h2>
        </div>
      )}
    </div>
  );
}

export default IsWinner;
