export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? `${winner} won!` : "It's a draw!"}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}
