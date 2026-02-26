import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Planks", type: "duration" },
    { name: "Running", type: "duration" },
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Push Ups", type: "repetition" }
  ];

  // Function to return to main menu
  const returnToMenu = () => setSelectedExercise(null);

  if (!selectedExercise) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Exercise Menu</h1>

        {exercises.map((exercise, index) => (
          <button
            key={index}
            onClick={() => setSelectedExercise(exercise)}
            style={{ display: "block", margin: "10px 0" }}
          >
          {exercise.name}
          </button>
      ))}
      </div>
    );
  }

  if (selectedExercise.type === "repetition") {
    return (
      <RepetitionExercise 
        name={selectedExercise.name} 
        returnToMenu={returnToMenu} 
      />
    );
  }

  if (selectedExercise.type === "duration") {
    return (
      <DurationExercise 
        name={selectedExercise.name} 
        returnToMenu={returnToMenu} 
      />
    );
  }
}

export default App;