import React from 'react'
import styled from 'styled-components'

import {Carrosel} from '../Carrosel/Carrosel.jsx'

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
`

const Area_me = styled.div`

  height: 35%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  

`

const About = styled.h1`
  color: #FF0000;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 100px;
  text-align: end;
  width: 85%;

`

const Title = styled.h1`
  font-family: 'Lexend Deca', sans-serif;
  color: white;
  font-size: 65px;
  text-align: center;
  margin-top: 50px;
`
const Block_Carrosel = styled.div`

  height: 41%;
  display: flex;
  justify-content: center;
  align-items: center;

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


  return (
    <Screen>
      <Area_me>
        <Me>
          My name is Leonardo Soares, I am 19 <br />years and i am a Systems Analysis and<br /> Development student at University<br /> Paulista.
        </Me>
      </Area_me>
      <About>About me</About>
      <Title>Technologies</Title>
      <Block_Carrosel>
        <Carrosel/>
      </Block_Carrosel>
    </Screen>
  )
}
