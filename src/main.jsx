import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function CounterApp() {
  const [count, setCount] = React.useState(0);

  return (
    <main className="app-shell">
      <section className="counter-panel" aria-labelledby="counter-title">
        <p className="eyebrow">React state demo</p>
        <h1 id="counter-title">Counter</h1>
        <output className="count-display" aria-live="polite">
          {count}
        </output>

        <div className="button-row" aria-label="Counter controls">
          <button type="button" onClick={() => setCount((value) => value - 1)}>
            Decrease
          </button>
          <button type="button" onClick={() => setCount(0)} className="secondary">
            Reset
          </button>
          <button type="button" onClick={() => setCount((value) => value + 1)}>
            Increase
          </button>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);
