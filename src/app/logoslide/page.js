'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom CSS
import './logoslider.css';

export default function LogoSlider() {
  const logos = [
    {
      src: 'https://cdn.cookielaw.org/logos/5435e8e3-1f77-4efd-bb7e-591b5a6e876e/d7899571-c1e4-4d71-8e87-09246e838e5d/d5b1d450-62b7-4f62-94ba-f9835c6495ed/Standard.png',
      alt: 'Logo 1',
    },
    { src: 'https://zed.com.pk/cdn/shop/files/logo.png?v=1613727701', alt: 'Logo 2' },
    {
      src: 'https://fittedshop.com/cdn/shop/files/Untitled-2_ce6a5871-a9f3-41c7-a38e-c06112e555c1.png?v=1692857595&width=1600',
      alt: 'Logo 3',
    },
    {
      src: 'https://caslay.in/cdn/shop/files/CASLAY-01_e3807c3e-3076-4b0e-8b9e-d4584d124320.png?crop=center&height=32&v=1697698881&width=32',
    },
    {
      src: 'https://espicopink.pk/cdn/shop/files/favicon_Espicopink.png?v=1721369603&width=32',
      alt: 'Logo 5',
    },
    {
      src: '	https://cdn.pushowl.com/images/tr:cm-pad_resize,w-192,h-192,bg-FFFFFF00/nureh-store/default-c53c3df6-ac74-4481-b0c1-085a782108e9-NUREHLOGO.png?ik-s=f4d5df401db61268d519f450a7469f12c39432ae',
      alt: 'Logo 6',
    },
  ];

  return (
    <div className='logo-slider-wrapper'>
      <Swiper
        modules={[Navigation, Mousewheel, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        // navigation={{ clickable: true }}

        mousewheel={{
          releaseOnEdges: true, // ⭐ Main trick
          sensitivity: 1,
        }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className='hero-swiper'
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className='logo-box'>
              <img src={logo.src} alt={logo.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
