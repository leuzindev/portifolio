import React,{ useState, useEffect }from 'react'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint';
import './animation.css'
import Download from '/download.png'
import Github from '/github.png'
import Linkedin from '/linkedin_circle.png'

import Logo_leuzin from '/logo_leuzin.png'

const Screen = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    @media (max-width: 900px) {
        flex-direction: column;
   
  }
    
`

const Right_card = styled.div`
    background-color: #000000;
    width: 70%;
    @media (max-width: 900px) {
    height: 70%;
    width: 100%;
   
  }
  
`

const Left_card = styled.div`
    width: 43%;
    background-image: url(/leonardo_pic.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 900px) {
    height: 30%;
    width: 100%;
    background-position-y: -70px;
   
  }
 
    `
const Leonardo_img = styled.img`

`

const Side_name_area = styled.div`

    overflow: hidden;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MyName = styled.h1`
    color: white;
    font-family: 'Krub', sans-serif;
    font-size: 51px;
    border-left: 1px solid white;
    margin-left: 90px;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;

`

const Ocupation_Feed = styled.div`
     @media (max-width: 900px) {
       
   
  }
 
`

const Ocupation_area = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50%;
`

const Name_Ocupation = styled.h1`
    text-align: end;
    font-family: 'Lexend Deca', sans-serif;
    color: white;
    font-size: 51px;
    @media (max-width: 1400px) {
    font-size: 30px;
   
  }
  @media (max-width: 900px) {
    font-size: 20px;
    text-align: start;
    margin-left: 10px;
   
  }
`

const Name_Ocupation_Red = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    text-align: end;
    color: #FF0000;
    font-size: 51px;
    @media (max-width: 1400px) {
    font-size: 30px;
   
  }
  @media (max-width: 900px) {
    font-size: 20px;
    text-align: start;
    margin-left: 10px;
  }
  
    
`

const Name = styled.div`
    margin-right: 70px;
    line-height: 60px;
    @media (max-width: 1400px) {
        line-height: 40px; 
    }
   
`

const Button_Project = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    border-radius: 33px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    font-family: 'Karla', sans-serif;
    font-size: 25px;
    transition: 1s all;
    cursor: pointer;
    margin-top: 20px;
    &:hover{
        transition: 1s all;
        background-color: white;
        color: black;
    }
     @media (max-width: 1400px) {
        margin-top: 10px;
        width: 15%;
        height: 40px;
        font-size: 20px;
  }
  @media (max-width: 900px) {
        width: 200px
   
  }

`
const Area_Button = styled.div`
    
    display: flex;
    justify-content: end;
    margin-right: 70px;
    @media (max-width: 900px) {
        display: none;
   
  }
`

const Download_area = styled.div`

    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
   
`

const Button_Download = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 76px;
    width: 375px;
    font-family: 'Krub', sans-serif;
    font-size: 28px;
    color: white;
    background-color: transparent;
    border: 2px solid white;
    cursor: pointer;
    transition: 1s all;
    &:hover{
        transition: 1s all;
        border: 2px solid #FF0000;
    }
    @media (max-width: 1400px) {

        width: 30%;
        font-size: 20px;
        height: 60px;
  }
    @media (max-width: 900px) {
        width: 300px;
        font-size: 20px;
   
  }
    
`

const Icon_baixar = styled.img`
    

`

const Area_Redes = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
   
`

const Img_link = styled.img`
    width: 40px;
    @media (max-width: 1400px) {

        width: 30px;
  }
`

const Img_github = styled.img`
     width: 40px;
      width: 40px;
    @media (max-width: 1400px) {

        width: 30px;
  }
`
const Redes = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    transition: 1s all;
    padding-bottom:10px;
    cursor: pointer;
    
  
    &:hover{
        transition: 1s all;
        border-bottom: 2px solid #FF0000;
        
    }
    @media (max-width: 900px) {
       margin: 10px;
   
  }
`

const Lbl = styled.h1`
    font-size: 28px;
    color: white;
    margin-left: 20px;
    font-family: 'Kulim Park', sans-serif;
     width: 40px;
    @media (max-width: 1400px) {
        font-size: 20px;
  }
`

const Block_dw_links = styled.div`
    

    
`
const AreaLogo = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    height: 100%;
    width: 50%;

   
`
const LogoLeuzindev = styled.img`
    margin-right: 20px;
    @media (max-width: 900px) {
    width: 30%;
   
}
`

const Stick = styled.img`

    
    background-color: white;
    width: 2px;
    height: 70px;
    @media (max-width: 1400px) {
        height: 50px;
   
  }
`
export const Apresentation = () => {



    const [animationDone, setAnimationDone] = useState(false);
    
      

    return (
        <Screen id='apresentation'>
            <Left_card>

            </Left_card>
            <Right_card>
            
                <Side_name_area>
                    <Stick></Stick>
                    <div className='Area'>
                    <p className={`slide-right initial ${animationDone ? 'animation-done' : ''}`}>Leonardo Soares</p>                    </div>
                    <AreaLogo>
                        <LogoLeuzindev src={Logo_leuzin}/>
                    </AreaLogo>
                </Side_name_area>
                <Ocupation_Feed>
                    <Ocupation_area>
                        <Name>
                            
                            <Name_Ocupation_Red>Back-end & Front-end</Name_Ocupation_Red>
                            <Name_Ocupation_Red>Developer</Name_Ocupation_Red>
                            <Name_Ocupation>Freelancer, located</Name_Ocupation>
                            <Name_Ocupation>in Brazil.</Name_Ocupation>
                        </Name>
                        <Area_Button>
                            <Button_Project href='#projects'>Projects</Button_Project>
                        </Area_Button>

                    </Ocupation_area>

                    <Block_dw_links>

                        <Download_area>
                            <Button_Download href='./cv_leonardo.pdf' download="Cv_Leonardo.pdf">Baixar Currículo <Icon_baixar src={Download} /></Button_Download>
                        </Download_area>
                        <Area_Redes>
                            <Redes href='https://github.com/leuzindev'>
                                <Img_github src={Github} />
                                <Lbl>Github</Lbl>
                            </Redes>
                            <Redes href='https://www.linkedin.com/in/leonardodevs/'>
                                <Img_link src={Linkedin} />
                                <Lbl>LinkedIn</Lbl>
                            </Redes>
                        </Area_Redes>
                    </Block_dw_links>
                </Ocupation_Feed>
                <Waypoint
                    onEnter={() => {
                        setAnimationDone(true);
                    }}
                />
            </Right_card>
        </Screen>
    )
}
