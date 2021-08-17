import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [isDark, setIsDark] = useState(true);
  const style = isDark ? { app: "app" } : { app: "app app-dark" };
  return (
    <div className={style.app}>
      <h1>Tic Tac Toe</h1>
      <Game isDark={isDark} />
    </div>
  );
}

export default App;
