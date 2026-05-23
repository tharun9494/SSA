import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Home.css';

const slides = [
  {
    id: 1,
    title: 'THE LAYERED HOUSE',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 2,
    title: 'KDP OFFICE',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 3,
    title: 'ECLIPSE',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000'
  }
];

const Home = () => {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        speed={1000}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Mousewheel, Pagination, Autoplay, EffectFade]}
        className="hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <div className="title-mask-wrapper">
                <span className="slide-category">{slide.category}</span>
              </div>
              <div className="title-mask-wrapper">
                <h1 className="slide-title">{slide.title}</h1>
              </div>
            </div>
            <img src={slide.image} alt={slide.title} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Home;
