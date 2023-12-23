import React, { useEffect } from 'react'  //use effect is where we open the page it will run somthing given to it
import styled from 'styled-components' 
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import data from '../data.json'              //as database was not working so made a custom json from where we extract the data

function Home() {
  
  useEffect(()=>{
    let tempMovies = data.payload.items.map((item)=>{
      return {id : item.id , item}     //capturing each item and id alag se
    });
      console.log(tempMovies)
  },[])

  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home

const Container = styled.main`
//main is same as div but google vgyara browser just consider it as some important part of a page
  min-height: calc(100vh - 70px) ;    //iss container ki height atleast "(total viewport - navbar height)" to rhegi hi
  padding : 0 calc(3.5vw + 5px);   //some set rkhi hui padding for top-bottom and left-right(calc is when we need some calculated values)
  position: relative;
    &:before{
      background: url('/images/home-background.png') center center   fixed;
      background-size: cover;
      content : "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;    //sab elements se peeche rhega
    }
  
  //upar wala aise bhi ho skta(shown below) you dont really need to use "before:" 
  //background: url('/images/home-background.png') center /cover no-repeat fixed;  // "/cover means that it is a background-size property and is used to set the image to fill the whole background area"

    overflow-x: hidden;
`