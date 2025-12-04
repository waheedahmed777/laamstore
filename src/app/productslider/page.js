'use client';
import React from 'react';
import '../globals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function containerslider() {
  const cards = [
    {
      title: 'Container 1',
      desc: 'Description 1',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Container 2',
      desc: 'Description 2',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Container 3',
      desc: 'Description 3',
      img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Container 4',
      desc: 'Description 4',
      img: 'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {cards.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className='container'
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  transition: 'transform 0.3s ease',
                  height: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h3
                  style={{
                    textAlign: 'center',
                    fontSize: '40px',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '14px',
                  }}
                >
                  {card.desc}
                </p>
                <button
                  style={{
                    alignContent: 'center',
                    backgroundColor: '#ff6f61',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                  }}
                >
                  {' '}
                  Shop Now
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
