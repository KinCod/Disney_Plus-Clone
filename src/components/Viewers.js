import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Blocks>
      <span>
        <img src="images/viewers-disney.png" alt="" />
      </span>
      <span>
        <img src="images/viewers-marvel.png" alt="" />
      </span>
      <span>
        <img src="images/viewers-national.png" alt="" />
      </span>
      <span>
        <img src="images/viewers-pixar.png" alt="" />
      </span>
      <span>
        <img src="images/viewers-starwars.png" alt="" />
      </span>
    </Blocks>
  )
}

export default Viewers

const Blocks = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
    
    span{
        box-sizing: border-box;
        cursor : pointer;
        border: 3px solid rgba(249,249,249,0.1);
        border-radius: 10px;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb( 0 0 0 /73%) 0px 16px 10px -10px;
        margin-left: 10px;
        margin-right :10px;

        img{
            width : 100%;
        }
        
        &:hover{
            border : 3px solid rgba(249,249,249,0.8);
            transform:scale(1.05) ;
        
        }

        transition-duration: 500ms;
        
    }
`