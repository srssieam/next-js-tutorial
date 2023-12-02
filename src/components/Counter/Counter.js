"use client";

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2>Counter: {counter}</h2>
      <button className='px-3 py-2 bg-green-600 text-black mr-3' onClick={() => setCounter(counter +1)}>Increase</button>
      <button className='px-3 py-2 bg-red-500 text-black' onClick={() => setCounter(counter -1)}>Decrease</button>
        </div>
    );
};

export default Counter;