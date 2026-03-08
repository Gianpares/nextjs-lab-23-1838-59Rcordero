'use client'; 

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="border p-6 rounded-lg shadow-md bg-white text-center">
      <h2 className="text-xl font-bold mb-4">Counter: {count}</h2>
      <div className="flex gap-4 justify-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}