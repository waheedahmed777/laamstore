'use client';
import { useState, useEffect } from 'react';

export default function usestates() {
  useEffect(() => {
    console.log('Har render par chal raha hai');
  });

  let [product, setproduct] = useState({
    id: 1,
    name: 'Motorcycle ',
    price: 23000,
    quantity: 1,
  });

  return (
    <>
      <h1>
        . {product.id} {product.name} {product.price}
      </h1>
      <p>{product.quantity}</p>
      <button
        onClick={() => {
          setproduct((prev) => ({
            ...prev, // baqi state same rahegi
            quantity: prev.quantity + 1, // sirf quantity update
          }));
        }}
      >
        {' '}
        increase{' '}
      </button>
    </>
  );
}
