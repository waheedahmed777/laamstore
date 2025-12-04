// app/components/Header.js
'use client';
import Image from 'next/image';
import Link from 'next/link'; // ✔ Correct Import
import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import './Header.css';

export default function Header() {
  const router = useRouter();

  return (
    <div className='Header'>
      <img src='/public/laam-logo.png' alt='' />

      <div className='menu'>
        <ul>
          <li>
            {' '}
            <Link href='/'>Home</Link>{' '}
          </li>
          <li>
            {' '}
            <Link href='/products'>Products</Link>
          </li>
          <li>
            {' '}
            <Link href='/about'>About</Link>{' '}
          </li>
          <li>
            {' '}
            <Link href='/contact'>Contact</Link>{' '}
          </li>
        </ul>
      </div>

      <div className='icon'>
        <FaShoppingCart size={30} color='black' />
        <span>0</span>

        <FaUser onClick={() => router.push('/login')} size={30} color='black' />
      </div>
    </div>
  );
}
