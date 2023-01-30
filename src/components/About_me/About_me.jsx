import React, { useEffect } from 'react'
import styled from 'styled-components'

import Carrosel from '../Carrosel/Carrosel.jsx'
import 'animate.css';
import './about.css'


const Screen = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    background-image: url(/SOARES_bg.png);
`
const Me = styled.h1`  
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 45px;
  line-height: 60px;
  @media (max-width: 1400px) {
    font-size: 30px;
    line-height: 43px;

  }
  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 30px;

  }
`

const Area_me = styled.div`

  height: 35%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  

`

const About = styled.h1`


`


const Block_Carrosel = styled.div`

  height: 41%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: 60%;
  }
`

const Swiper = styled.div`
  
`
const Swiper_btn_next = styled.div`
  
`
const Swiper_btn_prev = styled.div`
  
`
const Swiper_btn_pagination = styled.div`
  
`

export const About_me = () => {
  useEffect(() => {
    const aboutMeElement = document.querySelector('.about');
    const titleElement = document.querySelector('.title');

    function handleScroll() {
      if (aboutMeElement.scrollIntoView) {
        aboutMeElement.classList.add('animate__animated', 'animate__bounceInRight');
      }

      if (titleElement.scrollIntoView) {
        titleElement.classList.add('animate__animated', 'animate__flipInX');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Screen>
      <Area_me>
        <Me>
          My name is Leonardo Soares, I am 19 <br />years and i am a Systems Analysis and<br /> Development student at University<br /> Paulista.
        </Me>
      </Area_me>
      <h1 className='about'>About me</h1>
      <h1 className='title'>Technologies</h1>
      <Block_Carrosel>
        <Carrosel />
      </Block_Carrosel>
    </Screen>
  );
}