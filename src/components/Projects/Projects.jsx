import React, { useRef, useState } from 'react'
import styled from 'styled-components'



import { Cube } from '../Cube/Cube'






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
const AreaDesc = styled.div`
   
    
    
    
    
`
export const Projects = () => {
  return (
    <Screen id='projects'>
      <Cube />
      <AreaDesc>
      s
      </AreaDesc>
    </Screen>
  )
}
