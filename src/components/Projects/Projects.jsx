import React, { useRef, useState } from 'react'
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

import reactjs from '/reactjs.png'
import nestjs from '/nestjs.png'
import javascript from '/javascript.png'
import typescript from '/typescript.png'
import java from '/java.png'
import csharp from '/csharp.png'
import python from '/python.png'
import node from '/node.png'
import django from '/django.png'
import html from '/html.png'
import css from '/css.png'
import mysql from '/mysql.png'
import mongodb from '/mongodb.png'
import postgres from '/postgresql.png'
import prisma from '/prisma.png'
import figma from '/figma.png'


const ProjImgs = styled.img`
  max-width: 85%;
  max-height: 100%;

`
// import required modules
import {  EffectCoverflow, Pagination } from "swiper";


const Screen = styled.div`
    width: 100%;
    height: 120vh;
    text-align: center;
    background-image: url('/bg_project.png'); 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    
`
const AreaDesc = styled.div`
  background-color: red;
  height: 30%;
  width: 100%;
`

const AreaInfo = styled.div`
  background-color: blue;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content:  flex-start;
  align-items: flex-start;
  flex-direction: column;
`


const NomeProjeto = styled.h1`
  font-family: 'MuseoModerno';
  font-size: 25pt;
  color: white;
`

const Infos = styled.p`
  font-size: 15pt;
  color: white;
  font-family: 'JetBrains Mono';
`
export const Projects = () => {

  const [currentImage, setCurrentImage] = useState(1);

  const handleChange = (index) => {
    setCurrentImage(index)
  }


  return (
    <Screen id='projects'>
      <Swiper
        onSlideChange={({ activeIndex }) => handleChange(activeIndex)}
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
      <AreaDesc>
        {currentImage < 3  && (
          <AreaInfo id='connect-info'>
            <NomeProjeto>Connect Bank</NomeProjeto>
            <Infos>Um Banco digital focado na experiência do usuário</Infos>
            <Infos>Uma API própria para Autenticação e transação de Pix</Infos>
          </AreaInfo>
        )}
        {(currentImage === 3 || currentImage === 4) && (
          <AreaInfo id='hzc-info'>
            <NomeProjeto>Hzc App</NomeProjeto>
            <Infos>Um site para skatistas</Infos>
            <Infos>Flex box e grid layout</Infos>
          </AreaInfo>
        )}
        {(currentImage === 5 || currentImage === 6) && (
          <AreaInfo id='lorem-info'>
            <NomeProjeto>Lorem Barber</NomeProjeto>
            <Infos>Um site para uma barbearia moderna</Infos>
            <Infos>Reactjs e carrosel de imgs</Infos>
          </AreaInfo>
        )}
      </AreaDesc>
    </Screen>
  )
}
