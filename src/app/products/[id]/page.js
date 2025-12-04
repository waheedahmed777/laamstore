'use client';
import { use } from 'react';
import products from '@/app/data/productdata.json';
import './productdetal.css';
import { useState } from 'react';

export default function ProductDetail({ params }) {
  const { id } = use(params);
  const [count, setcount] = useState(0);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2 className='product-not-found'>Product Not Found</h2>;
  }

  return (
    <div className='single-product-wrapper'>
      {/* LEFT SIDE – IMAGE */}
      <div className='single-product-image'>
        <img src={product.image} alt={product.name} className='single-product-main-img' />
      </div>

      {/* RIGHT SIDE – DETAILS */}
      <div className='single-product-info'>
        <h1 className='product-title'>{product.name}</h1>

        <div className='product-price-box'>
          <span className='product-price'>Rs {product.price}</span>
          {product.off && <span className='product-discount'>{product.off} OFF</span>}
        </div>

        <p className='product-description'>{product.description}</p>

        <div className='product-meta'>
          <p>
            <strong>Manufacturer:</strong> {product.manufacturer}
          </p>
          <p>
            <strong>Category:</strong> {product.product_category.name}
          </p>
          <p>
            <strong>Created:</strong> {product.created_at}
          </p>
          <p>
            <strong>Updated:</strong> {product.updated_at}
          </p>
        </div>

        <div className='counter'>
          <button onClick={() => setcount(count + 1)} className='increase'>
            +
          </button>
          <h1> {count} </h1>
          <button onClick={() => setcount(count - 1)} className='increase'>
            -
          </button>
        </div>
        <div className='product-actions'>
          <button className='btn-add-cart'>Add to Cart</button>
          <button className='btn-buy-now'>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
