// app/components/Header.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import { FiUser } from 'react-icons/fi';
import { HiBars3 } from 'react-icons/hi2';
import { CiShoppingCart } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

import './Header.css';

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false); // 👈 Sidebar State

  return (
    <>
      <div className='Header'>
        {/* Bottom Section */}
        <div className='bottom'>
          {/* Logo */}
          <div className='logo'>
            <img src='/svgexport-1 (1).png' alt='Logo' className='logo-img' />
          </div>

          {/* Menu Icon */}
          <div className='menu'>
            <HiBars3 className='menu-icon' onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>

      {/* Right Sidebar / Popup */}
      <div className={`sidebar ${open ? 'open' : ''}`}>
        {/* Close Button */}
        <button className='close-btn' onClick={() => setOpen(false)}>
          <RxCross1 />
        </button>

        {/* Top Icons in Sidebar */}
        <div className='sidebar-top'>
          <CiShoppingCart className='sidebar-icon' />
          <FiUser className='sidebar-icon' />
          <CiBookmark className='sidebar-icon' />
        </div>

        {/* Menu Links */}
        <div className='sidebar-links'>
          <Link className='link' href={'/'}>
            {' '}
            Home{' '}
          </Link>
          <Link className='link' href={'/products'}>
            {' '}
            Products{' '}
          </Link>
          <Link className='link' href={'/about'}>
            {' '}
            About{' '}
          </Link>
          <Link className='link' href={'/contact'}>
            {' '}
            Contact{' '}
          </Link>
          <Link className='link' href={'/blog'}>
            {' '}
            Blog{' '}
          </Link>
        </div>
      </div>
    </>
  );
}
