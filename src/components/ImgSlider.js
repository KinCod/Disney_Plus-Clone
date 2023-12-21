import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    //this object is consisting of the settings needed for the slider (read documentation)
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true
    };

  return (
    <Carousel {...settings}>         
        <Wrap>
            <img src="images/slider-badag.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="images/slider-badging.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="images/slider-scale.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="images/slider-scales.jpg" alt="" />
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider


const Carousel = styled(Slider)`     //directly we passed the Slider to a styled component so we can use the Carousel tag instead of specially using Slider tag
    margin-top: 20px;

    .slick-list{                      //you know that carousel is now a slick so this slick-list is a class of slick that stops one image from overflowing(but we want overflow thus see in page)
        overflow: visible;
    }

    button{
        z-index:1;
    }

    //used the inspect to find this (direct buttons pe inspect kra and chage krlia colorrrr)
    .slick-dots li.slick-active button:before{    //li ek tag hai jiske andar class hai slick-active(tells the button is active) toh uske andar jo button hai usmai ek before option hai(directly given in the React Slick) so bas usmai shown that pehle color black and i changed it to white easy( experiment krte rehna bete)
        color:white;
    }
`

const Wrap = styled.div`
    cursor: pointer;

    img{
        border : 4px solid transparent;
        width : 100%;
        height : 100%;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb( 0 0 0 /73%) 0px 16px 10px -10px; // seeeee why this works
        
        &:hover{
            border : 4px solid rgba(249,249,249,0.8);
        }

        transition-duration: 500ms;
    }
    
`