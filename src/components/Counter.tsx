import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span className={styles.counter}>{count}</span>
      <button
        className={styles.counter__button}
        onClick={() => setCount((state) => state + 1)}
      >
        increment
      </button>
      <button
        className={styles.counter__button}
        onClick={() => setCount((state) => state - 1)}
      >
        decrement
      </button>
    </div>
  );
};
