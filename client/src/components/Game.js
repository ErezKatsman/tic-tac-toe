import React, { useState, useEffect } from "react";
import Board from "./Board";
import { calculateWinner } from "../utils";

export default function Game() {
  const [isDark, setIsDark] = useState(false);

  const style = isDark
    ? { game: "game ", btn: "btn" }
    : { game: "game game-light", btn: "btn btn-light" };

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xo = xIsNext ? "X" : "O";

  function handleClick(i) {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select the square
    squares[i] = xo;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setxIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setxIsNext(step % 2 === 0);
  }

  function renderMoves() {
    return history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  }

  const startNewGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setxIsNext(true);
  };

  if (winner)
    return (
      <div className={style.game}>
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className={`corner ${style.btn}`}
        >
          dark/light
        </button>
        <h3>
          The winner is <span className={winner}>{winner}</span>
        </h3>
        <button className={style.btn} onClick={startNewGame}>
          Start New Game
        </button>
      </div>
    );

  if (stepNumber === 9)
    return (
      <div className={style.game}>
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className={`corner ${style.btn}`}
        >
          dark/light
        </button>
        <h3>Draw! There in no winner</h3>
        <button className={style.btn} onClick={startNewGame}>
          Start New Game
        </button>
      </div>
    );

  return (
    <div className={style.game}>
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className={`corner ${style.btn}`}
      >
        dark/light
      </button>
      <h1>Tic Tac Toe</h1>
      <Board
        squares={history[stepNumber]}
        onClick={handleClick}
        isDark={isDark}
      />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3> {"next Player: " + xo}</h3>
      </div>
    </div>
  );
}
