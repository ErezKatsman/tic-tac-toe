import React, { useState, useEffect } from "react";

export default function Square({ value, onClick, isDark }) {
  const [style, setStyle] = useState(value ? `squares ${value}` : "squares");
  useEffect(() => {
    if (isDark) setStyle(value ? `squares ${value}` : "squares");
    else
      setStyle(
        value ? `squares squares-light ${value}` : "squares squares-light"
      );
  }, [isDark, value]);
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}
