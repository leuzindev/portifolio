import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import lorem1 from '/lorem1.png'
import lorem2 from '/lorem2.png'

import connect1 from '/connect1.png'
import connect2 from '/connect2.png'
import connect3 from '/connect3.png'

import hzc1 from '/hzc1.png'
import hzc2 from '/hzc2.png'

const ProjImgs = styled.img`
  max-width: 85%;
  max-height: 100%;

`
// import required modules
import { EffectCube,EffectCoverflow, Pagination } from "swiper";

export const Cube = () => {
    return (
        <>
            {/* <Swiper

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
            </Swiper> */}
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
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
        </>
    )
}
