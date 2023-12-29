import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Blocks>
      <span className='disney'>
        <img src="images/viewers-disney.png" alt="" />
        <img className='hoverr' src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_C061B00E543326DA345FBF996B4D3D76422B58A49FDEE9AD9A2664618619A8F9" alt="" />
      </span>
      <span className='marvel'>
        <img src="images/viewers-marvel.png" alt="" />
        <img className='hoverr' src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_B8F3C4DDB037CD1840A53BDFA0AA0504E9FDDE7781D62D28230D5C74F2B06624" alt="" />
      </span>
      <span className='national'>
        <img src="images/viewers-national.png" alt="" />
        <img className='hoverr' src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_16793CC7E2AF7B8687B0DD00673503CBC14CB2C801952D62B4551B6866073650" alt="" />
      </span>
      <span className='pixar'>
        <img src="images/viewers-pixar.png" alt="" />
        <img className='hoverr' src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_92FA84DF0F5D951171B41E5947716ADA382A15AE5DA37869E9D592D043F49316" alt="" />
      </span>
      <span className='starwars'>
        <img src="images/viewers-starwars.png" alt="" />
        <img className='hoverr' src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577" alt="" />
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
        position: relative;
        overflow: hidden;          //this is when we hover on span the image comes out of border isliye overflow hidden
        

        img{
            width : 100%;
            height: 100%;
            transition: ease-in-out 100ms;
        }
        
        &:hover{
            border : 3px solid rgba(249,249,249,0.8);
            transform:scale(1.05) ;
            
        }

        transition-duration: 500ms;
        
        .hoverr{
          visibility: hidden;
          position: absolute;
          opacity: 0;
          top:0;
          left:0;
          z-index: -1;
          transition: opacity 500ms ease-in-out;   //opacity dheere dheere aayegi from 0 to 1
        }

        &:hover .hoverr{
              visibility: visible;
              opacity: 1;
        }
          
        }

    
`
