import React, { useState } from 'react'
import styled from 'styled-components'
import './font.css'
import logoHome from '/logo_home.png'
import setaHome from '/seta_home.png'
import Typical from 'react-typical'




const Screen = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('/bg_home.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
`

const AreaSee = styled.div`
   
    height: 38%;
    display:flex;
    justify-content: end ;
    align-items: center;
    flex-direction: column;
`
const AreaLogo = styled.div`
    
    height: 30%;
    display:flex;
    justify-content: center ;
    align-items: center;
`
const AreaTexto = styled.div`

    height: 30%;
    display:flex;
    justify-content: center ;
    align-items: center;
    flex-direction: column;
    
`
const Hi = styled.h1`
    font-family: 'Fonthome';
    color: white;
    font-size: 35pt;
    margin: 5px;
    @media (max-width: 1400px) {
      font-size: 23pt;

  }

`
const See = styled.p`
    font-family: 'Lexend Deca';
    color: white;
    font-size: 15pt;
    margin: 15px;
`
const Logo_home = styled.img`
  @media (max-width: 1400px) {
    width: 10%;

  }
`
const Arrow = styled.img`
    
`
const Link = styled.a`
  text-decoration: none;
`
const Hi_sub = styled.h2`
    font-family: 'Fonthome';
    color: white;
    font-size: 10pt;
    margin-top: 5px;
    margin-left: 3px;
    
   
`

export const Home = () => {


  return (
    <Screen>
      <AreaLogo>
        <Logo_home src={logoHome} />
      </AreaLogo>
      <AreaTexto>
     
          <Hi>Hi, I'm Leo. I'm a Full-Stack</Hi>
          <Hi>developer & UI designer.</Hi>
        <div style={{ display: "flex" }}>
         <Hi_sub>you can tell me about</Hi_sub> 
         <Hi_sub>
         <Typical
                loop={Infinity}
                steps={[
                'React',2000,'Python',1000,
                'Django',500
                ]}
              />
        </Hi_sub>
              
            

        </div>
      </AreaTexto>

      <Link href="#apresentation">
        <AreaSee>
          <See>See more about me</See>
          <Arrow src={setaHome} />
        </AreaSee>
      </Link>
    </Screen>
  );
}
