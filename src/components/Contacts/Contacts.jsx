import React from 'react'
import styled from 'styled-components'

import contatosAnimation from '/contact_gif.svg'

import whatsapp from '/whatsapp.png'
import git from '/git_contact.png'
import gmail from '/gmail.png'
import linkedin from '/linkedin.png'

const Screen = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    background-image: url('/CONTACT_bg.png');
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 900px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
}
`

const LeftCard = styled.div`
  
  height: 70%;
  width: 40%;
  @media (max-width: 900px) {
    width: 100%;
    height: 60%;
  }
`

const RightCard = styled.div`
  height: 70%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: 40%;
    width: 100%;
  }
`

const ContactAnimation = styled.img`
  width: 80%;
`

const AreaTitulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  height: 20%;
`
const Titulo = styled.h1`
  font-family: 'MuseoModerno';
  color: white;
  font-size: 72pt;
  @media (max-width: 1400px) {
    margin-bottom: 50px;
}
  @media (max-width: 900px) {
    font-size: 32pt;
    margin-bottom: 0px;
  }
  
`
const CorpoContato = styled.div`
   
  width: 100%;
  height: 80%;
  
  @media (max-width: 900px) {
    height: 62%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;


  }

 
`
const LblContacts = styled.p`
  text-align: center;
  color: white;
  border-bottom: 2px solid white;
  font-family: 'JetBrains Mono';
  padding-bottom: 10px;
  font-size: 22pt;
  width: 100%;
  transition: 1s all;
  &:hover{
    transition: 1s all;
    border-color: #FF0000;
    cursor: pointer;
  }
  @media (max-width: 900px) {

    font-size: 15px;
  }
`

const BlocoImg = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  height: 20%;
  
`
const ContactImg = styled.img`
 margin-left: 20px;
  @media (max-width: 900px) {

  width: 45px;
  }
`
export const Contacts = () => {
  return (
    <Screen>
      <LeftCard>
        <AreaTitulo>
          <Titulo>Contacts</Titulo>
        </AreaTitulo>
          <CorpoContato>
           
              <BlocoImg>
                <LblContacts>leonardoc.soares08@gmail.com</LblContacts>
                <ContactImg src={gmail}/>
              </BlocoImg>
              <BlocoImg>
                <LblContacts>+55 (11) 99290-9966</LblContacts>
                <ContactImg src={whatsapp}/>
              </BlocoImg>
              <BlocoImg>
                <LblContacts>/in/leuzindevs/</LblContacts>
                <ContactImg src={linkedin}/>
              </BlocoImg>
              <BlocoImg>
                <LblContacts>/leuzindev</LblContacts>
                <ContactImg src={git}/>
              </BlocoImg>

              
              
              
          
          </CorpoContato>
      </LeftCard>
      <RightCard>
      <ContactAnimation src={contatosAnimation} />
      </RightCard>
    </Screen>
  )
}


