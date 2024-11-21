"use client";

import { useCounter } from "./CounterContext";

export default function CounterPage() {
  const { state, dispatch } = useCounter();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Counter: {state.count}</h1>
      <div className="flex gap-2 mt-4">
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={() => dispatch({ type: "increment" })}
        >
          + Increment
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={() => dispatch({ type: "decrement" })}
        >
          - Decrement
        </button>
      </div>
    </div>
  );
}
