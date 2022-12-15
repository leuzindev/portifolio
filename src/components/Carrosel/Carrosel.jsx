import React, { Component } from 'react'
import Carousel from "react-simply-carousel";
import styled from 'styled-components';
import './Carrosel.css'

import setaE from '/arrow_red_carrosel_esquerda.png'
import setaD from '/arrow_red_carrosel_direita.png'

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


class Carrosel extends Component{
  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render() {
    return (
      <Carousel
        activeSlideIndex={this.state.activeSlideIndex}
        onRequestChange={this.setActiveSlideIndex}
        itemsToShow={4}
        itemsToScroll={4}
        speed={400}
        backwardBtnProps={{
          children: <img c src={setaE}/>,
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            backgroundColor: 'transparent',
            border: 0,
            marginRight: 40
          }}
        }
        forwardBtnProps={{
          children: <img c src={setaD}/>,
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            backgroundColor: 'transparent',
            border: 0,
            marginLeft: 40
          }
        }}
      >
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={python} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={javascript} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={typescript} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={reactjs} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={nestjs} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={django} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={node} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={java} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={csharp} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={html} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={css} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={mysql} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={mongodb} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={postgres} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={prisma} /></div>
        <div className="carrosel" style={{ width: 300, height: 300 }}><img src={figma} /></div>
        
      
      </Carousel>
    );
  }
}



export default Carrosel;