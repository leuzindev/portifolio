import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import './Projects.css'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import lorem1 from '/lorem1.png'
import lorem2 from '/lorem2.png'

import connect1 from '/connect1.png'
import connect2 from '/connect2.png'
import connect3 from '/connect3.png'

import hzc1 from '/hzc1.png'
import hzc2 from '/hzc2.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";



// import required modules
import { EffectCube, Pagination } from "swiper";

const Screen = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    background-color: black;
    
`
export const Projects = () => {
  return (
    <Screen id='projects'>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={connect1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={connect2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={connect3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hzc1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hzc2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lorem1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lorem2} />
        </SwiperSlide>
      </Swiper>
      {/* <Swiper navigation={true} 
        modules={[Navigation]} 
        loop={true}
        
        className="mySwiper carrosel-swiper">
        <SwiperSlide><img src={lorem1} /></SwiperSlide>
        <SwiperSlide><img src={lorem2} /></SwiperSlide>
        <SwiperSlide><img src={connect1} /></SwiperSlide>
        <SwiperSlide><img src={connect2} /></SwiperSlide>
        <SwiperSlide><img src={connect3} /></SwiperSlide>
        <SwiperSlide><img src={hzc1} /></SwiperSlide>
        <SwiperSlide><img src={hzc2} /></SwiperSlide>
        
      </Swiper> */}
    </Screen>
  )
}
