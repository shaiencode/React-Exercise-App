import React, { useState, useEffect } from "react";

function DurationExercise({ name, returnToMenu }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (value) => {
    return value.toString().padStart(2, "0");
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{name}</h1>

      <h2>
        Timer: {format(minutes)}:{format(remainingSeconds)}
      </h2>

      <button onClick={() => setSeconds(0)}>
        Reset
      </button>

      <button onClick={returnToMenu}>
        Return
      </button>
    </div>
  );
}

export default DurationExercise;