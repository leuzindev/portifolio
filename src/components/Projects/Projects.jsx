import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

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



const Tech = styled.img`
  margin: 10px;
  @media (max-width: 1400px) {
      width: 120px;
}

`

const Tech_figma = styled.img`
  margin: 10px;
  @media (max-width: 1400px) {
      width: 70px;
}

`



const ProjImgs = styled.img`
  max-width: 85%;
  max-height: 100%;

`



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

  height: 30%;
  width: 100%;
`

const AreaInfo = styled.div`
  
  height: 100%;
  width: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;
`


const NomeProjeto = styled.h1`
  font-family: 'MuseoModerno';
  font-size: 25pt;
  color: white;
`

const Infos = styled.li`
  font-size: 15pt;
  color: white;
  font-family: 'JetBrains Mono';
  margin: 5px;
  
`

const Bloco_titulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  height: 20%;
`
const Bloco_info = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`
const ContainerInfo = styled.div`
  
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Bloco_tech = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`
const Container_desc = styled.div`
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 50%;
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
        {currentImage < 3 && (
          <AreaInfo id='connect-info'>
            <Bloco_titulo>
              <NomeProjeto>Connect Bank</NomeProjeto>
            </Bloco_titulo>
            <ContainerInfo>
              <Bloco_info>
                <Container_desc>
                <Infos>Um Banco digital focado na experiência do usuário</Infos>
                <Infos>Uma API própria para Autenticação e transação de Pix</Infos>
                <Infos>Sitesma de Login com JWT</Infos>
                <Infos>Hash de senha de usuário</Infos>
                <Infos>Rotas protegidas</Infos>
                </Container_desc>
              </Bloco_info>
              <Bloco_tech>
                <Tech src={python}/>
                <Tech src={reactjs}/>
                <Tech src={mysql}/>
                <Tech src={django}/>
                
              </Bloco_tech>

            </ContainerInfo>
          </AreaInfo>
        )}
        {(currentImage === 3 || currentImage === 4) && (
          <AreaInfo id='hzc-info'>
             <Bloco_titulo>
            <NomeProjeto>Hzc App</NomeProjeto>
             </Bloco_titulo>
             <ContainerInfo>
             <Bloco_info>
              <Container_desc>
              <Infos>Uma página sobre skate</Infos>
              <Infos>Flex box e Grid layout</Infos>
              <Infos>Mobile first</Infos>
              </Container_desc>
            </Bloco_info>
            <Bloco_tech>
            <Tech src={html}/>
              <Tech src={css}/>
              <Tech src={javascript}/>
              <Tech_figma src={figma}/>
            </Bloco_tech>

            </ContainerInfo>
          </AreaInfo>
        )}
        {(currentImage === 5 || currentImage === 6) && (
          <AreaInfo id='lorem-info'>
             <Bloco_titulo>
            <NomeProjeto>Lorem Barber</NomeProjeto>
             </Bloco_titulo>
             <ContainerInfo>
             <Bloco_info>
             <Container_desc>
              <Infos>Um site para uma Barbearia moderna</Infos>
              <Infos>Carrosel de Imagens</Infos>
              </Container_desc>
            </Bloco_info>
            <Bloco_tech>
              <Tech src={reactjs}/>
              <Tech_figma src={figma}/>
              <Tech src={javascript}/>
              
        
            </Bloco_tech>
            </ContainerInfo>
          </AreaInfo>
        )}
      </AreaDesc>
    </Screen>
  )
}
