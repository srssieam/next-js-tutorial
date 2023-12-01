"use client";
import React, { useState } from 'react';

const HomePage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>This is next app Home page</h1>
      <h2>Counter: {counter}</h2>
      <button className='px-3 py-2 bg-green-600 text-black mr-3' onClick={() => setCounter(counter +1)}>Increase</button>
      <button className='px-3 py-2 bg-red-500 text-black' onClick={() => setCounter(counter -1)}>Decrease</button>
    </div>
  );
};

export default HomePage;