import React from 'react'
import styled from 'styled-components'
import '/Home.css'
import logoHome from '/logo_home.png'
import setaHome from '/seta_home.png'


const Screen = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('/bg_home.png');
    background-repeat: no-repeat;
    background-size: cover;
  
`

const AreaSee = styled.div`
    background:red;
`
const AreaLogo = styled.div`
    background:blue;
    height: 30%;
    display:flex;
    justify-content: center ;
    align-items: center;
`
const AreaTexto = styled.div`
    background:yellow;
    height: 30%;
    display:flex;
    justify-content: center ;
    align-items: center;
    
`
const Hi = styled.h1`
    
`
const See = styled.p`
    
`
const Logo_home = styled.img`
    
`
const Arrow = styled.img`
    
`



export const Home = () => {
  return (
    <Screen>
      <div>
        <Logo_home src={logoHome} />
      </AreaLogo>
      <AreaTexto>
        <Hi>Hi, I'm Leo. I'm a Full-Stack developer & UI design.</Hi>
      </AreaTexto>
      <AreaSee>
        <See>See more about me</See>
        <Arrow src={setaHome} />
      </AreaSee>
    </Screen>
  )
}
