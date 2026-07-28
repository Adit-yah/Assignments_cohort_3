import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        reset,
      }}
    >
      {/* app */}
      {children} 
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);