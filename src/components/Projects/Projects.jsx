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

import habits0 from '/habits0.png'
import habits1 from '/habits1.png'
import habits2 from '/habits2.png'

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
@media (max-width: 900px) {
       
   width: 60px;
}
`

const Tech_figma = styled.img`
  margin: 10px;
  @media (max-width: 1400px) {
      width: 70px;
}
@media (max-width: 900px) {
       
       width: 30px;
    }
`



const ProjImgs = styled.img`
  max-width: 85%;
  max-height: 100%;
  
  @media (max-width: 1400px) {
    max-width: 70%;
}
@media (max-width: 900px) {
     max-width: 100%;
    
}
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
    @media (max-width: 900px) {
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
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
  @media (max-width: 1400px) {
    font-size: 12pt;
}
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
   @media (max-width: 900px) {
    width: 100%;  
    flex-direction: column;

}
`
const ContainerInfo = styled.div`
  
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    height: 200%;
  }
`

const Bloco_tech = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;  
    flex-direction: column;

}
`
const Container_desc = styled.div`
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 50%;
  @media (max-width: 900px) {

    height: 100%;
}
`

const InfoTitle = styled(Infos)`
  width: 50%;
  list-style: none;
`


export const Projects = () => {

  const [currentImage, setCurrentImage] = useState(0);

  const handleChange = (index) => {
    setCurrentImage(index)
    console.log(currentImage)
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
          <ProjImgs src={habits0} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjImgs src={habits1} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjImgs src={habits2} />
        </SwiperSlide>
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
              <NomeProjeto>Habits</NomeProjeto>
            </Bloco_titulo>
            <InfoTitle>O aplicativo apresenta um quadro diário que mostra a frequência dos hábitos praticados, permitindo que você veja sua progresso ao longo do tempo e se motive a seguir em frente.</InfoTitle>
            <ContainerInfo>
              <Bloco_info>
                <Container_desc>
                  <Infos>Aplicação de ponta a ponta</Infos>
                  <Infos>Backend </Infos>
                  <Infos>Versão Mobile</Infos>
                  <Infos>Api</Infos>

                </Container_desc>
              </Bloco_info>
              <Bloco_tech>
                <Tech src={typescript} />
                <Tech src={reactjs} />
                <Tech src={figma} />
                <Tech src={node} />
                <Tech src={prisma} />

              </Bloco_tech>

            </ContainerInfo>
          </AreaInfo>
        )}
        {currentImage >= 3 && currentImage < 6 &&  (
          <AreaInfo id='connect-info'>
            <Bloco_titulo>
              <NomeProjeto>Connect Bank</NomeProjeto>
            </Bloco_titulo>
            <InfoTitle>Um Banco digital focado na experiência do usuário com opção de pode fazer pix para outras contas</InfoTitle>

            <ContainerInfo>
              <Bloco_info>
                <Container_desc>
                  <Infos>Uma API própria para Autenticação e transação de Pix</Infos>
                  <Infos>Sistema de Login com JWT</Infos>
                  <Infos>Hash de senha de usuário</Infos>
                  <Infos>Rotas protegidas</Infos>
                </Container_desc>
              </Bloco_info>
              <Bloco_tech>
                <Tech src={python} />
                <Tech src={reactjs} />
                <Tech src={mysql} />
                <Tech src={django} />

              </Bloco_tech>

            </ContainerInfo>
          </AreaInfo>
        )}
        {currentImage >= 6 && currentImage <= 7 &&  (
          <AreaInfo id='hzc-info'>
            <Bloco_titulo>
              <NomeProjeto>Hzc App</NomeProjeto>
            </Bloco_titulo>
            <InfoTitle>Uma página sobre skate criado para particar meu conhecimentos em Flex box e Grid Layout</InfoTitle>

            <ContainerInfo>
              <Bloco_info>
                <Container_desc>
                 
                  <Infos>Flex box e Grid layout</Infos>
                  <Infos>Responsívo</Infos>
                  <Infos>Mobile first</Infos>
                </Container_desc>
              </Bloco_info>
              <Bloco_tech>
                <Tech src={html} />
                <Tech src={css} />
                <Tech src={javascript} />
                <Tech_figma src={figma} />
              </Bloco_tech>

            </ContainerInfo>
          </AreaInfo>
        )}
        {(currentImage > 7) && (
          <AreaInfo id='lorem-info'>
            <Bloco_titulo>
              <NomeProjeto>Lorem Barber</NomeProjeto>
            </Bloco_titulo>
            <InfoTitle>Um Site de baberia em react com planos e carrosel de imagens</InfoTitle>

            <ContainerInfo>
              <Bloco_info>
                <Container_desc>
                  <Infos>Um site para uma Barbearia moderna</Infos>
                  <Infos>Carrosel de Imagens</Infos>
                  <Infos>Styled Components</Infos>
                  <Infos>Prototipado no figma</Infos>
                </Container_desc>
              </Bloco_info>
              <Bloco_tech>
                <Tech src={reactjs} />
                <Tech_figma src={figma} />
                <Tech src={javascript} />


              </Bloco_tech>
            </ContainerInfo>
          </AreaInfo>
        )}
      </AreaDesc>
    </Screen>
  )
}
