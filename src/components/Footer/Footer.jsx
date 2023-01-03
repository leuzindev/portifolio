import React from 'react'
import styled from 'styled-components'
import logo from '/logofooter.png'

const Barra = styled.div`
  height: 50px;
  background-color: #2C2C2C;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LblFooter = styled.h1`
  font-family: 'Judson';
  color: white;
  font-size: 15pt;
`
const LogoFooter = styled.img`
  margin-left: 10px;
  
`
export const Footer = () => {
  return (
    <Barra><LblFooter>Developed by Leuzindev</LblFooter><LogoFooter src={logo}/></Barra>
  )
}
