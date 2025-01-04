import React, { useState } from "react";

function App() {
  const [maxPushups, setMaxPushups] = useState("");
  const [plan, setPlan] = useState([]);

  const generatePlan = () => {
    const base = parseInt(maxPushups, 10) || 0;
    const newPlan = [
      Math.ceil(base * 0.5),
      Math.ceil(base * 0.6),
      Math.ceil(base * 0.7),
      Math.ceil(base * 0.8),
      Math.ceil(base * 0.9),
      base + 1,
    ];
    setPlan(newPlan);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Pushup Coach</h1>
      <p>Enter your max pushups in one set:</p>
      <input
        type="number"
        value={maxPushups}
        onChange={(e) => setMaxPushups(e.target.value)}
        placeholder="e.g., 20"
      />
      <button onClick={generatePlan}>Generate Plan</button>
      <ul>
        {plan.map((set, index) => (
          <li key={index}>Set {index + 1}: {set} pushups</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
