import React from 'react'
import styled from 'styled-components'

import './animation.css'

import Download from '/download.png'
import Github from '/github.png'
import Linkedin from '/linkedin_circle.png'

import Logo_leuzin from '/logo_leuzin.png'

const Screen = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

const Right_card = styled.div`
    background-color: #000000;
    width: 70%;
    
  
`

const Left_card = styled.div`
    width: 43%;
    background-image: url(/leonardo_pic.png);
    background-repeat: no-repeat;
    background-size: cover;

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
`

const Name_Ocupation_Red = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    text-align: end;
    color: #FF0000;
    font-size: 51px;
    @media (max-width: 1400px) {
    font-size: 30px;
   
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
   
  }
`
const Area_Button = styled.div`
    
    display: flex;
    justify-content: end;
    margin-right: 70px;
`

const Download_area = styled.div`

    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button_Download = styled.button`
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
`

const Img_github = styled.img`
     width: 40px;
`
const Redes = styled.div`
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
`

const Lbl = styled.h1`
    font-size: 28px;
    color: white;
    margin-left: 20px;
    font-family: 'Kulim Park', sans-serif;
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
    return (
        <Screen id='apresentation'>
            <Left_card>

            </Left_card>
            <Right_card>
                <Side_name_area>
                    <Stick></Stick>
                    <div className='Area'>
                        <p className='slide-right'>Leonardo Soares</p>
                    </div>
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
                            <Button_Download>Baixar Currículo <Icon_baixar src={Download} /></Button_Download>
                        </Download_area>
                        <Area_Redes>
                            <Redes>
                                <Img_github src={Github} />
                                <Lbl>Github</Lbl>
                            </Redes>
                            <Redes>
                                <Img_link src={Linkedin} />
                                <Lbl>LinkedIn</Lbl>
                            </Redes>
                        </Area_Redes>
                    </Block_dw_links>
                </Ocupation_Feed>

            </Right_card>
        </Screen>
    )
}
