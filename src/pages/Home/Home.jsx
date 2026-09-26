import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Home.css';

// Project Hero Images from src/assets/home_page_images
import imgCurvedVilla from '../../assets/home_page_images/1 CURVED ELEVATION VILLA.jpeg';
import imgRameshReddy from '../../assets/home_page_images/2 RAMESH REDDY commercial.png';
import imgChittoorStation from '../../assets/home_page_images/3chittoor railway station.png';
import imgDyceOffice from '../../assets/home_page_images/4 DYCE OFFICE.png';
import imgBrothersHouse from '../../assets/home_page_images/5 brothers house or balaji house.jpg';
import imgForestOffice from '../../assets/home_page_images/6 forest office.jpg';
import imgSatyaram from '../../assets/home_page_images/7 satyaram.jpg';
import imgVijayApartment from '../../assets/home_page_images/8 vijay apartment.png';
import imgSivaPrasad from '../../assets/home_page_images/9 siva prasad.jpg';
import imgHemanthamaniClinic from '../../assets/home_page_images/10 hemanthamani clinic.png';

const slides = [
  {
    id: 1,
    title: 'CURVED ELEVATION VILLA',
    category: 'Residential Architecture',
    image: imgCurvedVilla
  },
  {
    id: 2,
    title: 'RAMESH REDDY COMMERCIAL',
    category: 'Commercial Complex',
    image: imgRameshReddy
  },
  {
    id: 3,
    title: 'CHITTOOR RAILWAY STATION',
    category: 'Infrastructure & Master Planning',
    image: imgChittoorStation
  },
  {
    id: 4,
    title: 'DYCE OFFICE',
    category: 'Railway Engineering & Institutional',
    image: imgDyceOffice
  },
  {
    id: 5,
    title: 'BROTHER’S HOUSE',
    category: 'Residential Architecture',
    image: imgBrothersHouse
  },
  {
    id: 6,
    title: 'FOREST DEPARTMENT OFFICE',
    category: 'Civic & Institutional',
    image: imgForestOffice
  },
  {
    id: 7,
    title: 'SATYARAM RESIDENCE',
    category: 'Fluidic Architecture',
    image: imgSatyaram
  },
  {
    id: 8,
    title: 'VIJAY APARTMENTS',
    category: 'Housing & Multi-Family',
    image: imgVijayApartment
  },
  {
    id: 9,
    title: 'NARROW HOUSE',
    category: 'Contemporary Architecture',
    image: imgSivaPrasad
  },
  {
    id: 10,
    title: 'HEMANTHAMANI CLINIC',
    category: 'Healthcare Architecture',
    image: imgHemanthamaniClinic
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
