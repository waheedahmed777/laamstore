'use client';
import { useState } from 'react';
export default function about() {
  const [count, setcount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
        type='button'
      >
        {' '}
        increase{' '}
      </button>
    </>
  );
}
