import React, { useState } from "react";

function RepetitionExercise({ name, returnToMenu }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "40px" }}>
      <h1>{name}</h1>

      <h2>Reps: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Add Rep
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <button onClick={returnToMenu}>
        Return
      </button>
    </div>
  );
}

export default RepetitionExercise;