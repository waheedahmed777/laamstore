'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './page.css';

export default function HeroScrollSlider() {
  const slides = [
    { title: 'Slide One', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a' },
    { title: 'Slide Two', img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea' },
    { title: 'Slide Three', img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828' },
  ];

  return (
    <div className='hero-wrapper'>
      <Swiper
        direction={'vertical'}
        mousewheel={{
          releaseOnEdges: true, // ⭐ Main trick
          sensitivity: 1,
        }}
        pagination={{ clickable: true }}
        speed={800}
        modules={[Mousewheel, Pagination]}
        className='hero-swiper'
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className='hero-slide' style={{ backgroundImage: `url(${s.img})` }}>
              <h1 className='hero-title'>{s.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Below content */}
      <div className='page-content'>
        <h2>Page Content Starts Here</h2>
        <p>Now the page scrolls naturally...</p>
        <p>Waheed bhai, yeh bilkul perfect effect dega.</p>
      </div>
    </div>
  );
}
