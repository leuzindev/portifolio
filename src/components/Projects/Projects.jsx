import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import './Projects.css'
import "swiper/css";
import "swiper/css/navigation";

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
    background-image: url('/bg_project.png'); 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    
    
    
`
const AreaSwiper = styled.div`

  height: 60%;
`

const AreaDescricao = styled.div`
  background-color: blue;
  height: 40%;
`

const ProjImgs = styled.img`
  max-width: 60%;
  max-height: 100%;

`



export const Projects = () => {
  return (
    <Screen id='projects'>
      <AreaSwiper>

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
          <SwiperSlide >
            <ProjImgs src={connect1} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjImgs src={connect2} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjImgs src={connect3} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjImgs src={hzc1} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjImgs src={hzc2} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjImgs src={lorem1} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjImgs src={lorem2} />
          </SwiperSlide>
        </Swiper>



      </AreaSwiper>
      <AreaDescricao>
        s
      </AreaDescricao>
    </Screen>
  )
}
