'use client';
import { useContext, useState } from 'react';
import { CartContext } from '../state/CartContext';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import products from '../data/productdata.json';
import './product.css';
import Link from 'next/link';

export default function Productes() {
  const { addToCart } = useContext(CartContext);
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className='products-container'>
      {products.map((item) => (
        <div
          key={item.id}
          className='product-card'
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='product-info'>
            <h3>{item.off}</h3>

            {likedProducts[item.id] ? (
              <FaHeart
                onClick={() => toggleLike(item.id)}
                className='heart-icon'
                size={20}
                color='red'
              />
            ) : (
              <FaRegHeart onClick={() => toggleLike(item.id)} className='heart-icon' size={20} />
            )}

            <Link key={item.id} href={`/products/${item.id}`}>
              {item.name}
            </Link>
            <p className='description'>{item.description}</p>
            <p className='price'>${item.price}</p>

            <button onClick={() => addToCart(item)} className='buy-button'>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
