import React from "react";
import Square from "./Square";

export default function Board({ squares, onClick, isDark }) {
  const style = isDark ? { board: "board" } : { board: "board board-dark" };
  return (
    <div className={style.board}>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          isDark={isDark}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
}
