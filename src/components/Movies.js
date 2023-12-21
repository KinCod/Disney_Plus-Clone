import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>

      <Content>
        <div>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg" alt="" />
        </div>
        <div>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/08A93C557C046ED8E088F6822BB179BDB28362D2DA214825E1FCC06DCC65EE24/scale?width=800&aspectRatio=1.78&format=jpeg" alt="" />
        </div>
        <div>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/73341C9CFC716929B40E9092D7ADC357A9B2C876FB010A4C193B21F3EF452670/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
        </div>
        <div>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/00EA763FCAAB2C64FD7C93EB42764D5072EE2822BF1A2932F465D76BB769ECBC/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
        </div>
        <div>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B200F645A0F5EED08548E9B51CFD844804D7B87550BA81E8AB7B76AD6AFD391/scale?width=800&aspectRatio=1.78&format=jpeg" alt="" />
        </div>
      </Content>
    </Container>
  )
}

export default Movies


const Container = styled.div`
  h4{
    font-size: 18px;
    margin-top: 20px;
    text-align: left;
    
  }
`
const Content = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4 , minmax(0,1fr));

  div{
    img{
      width : 100% ;
      height : 100% ;            //just fills the whole grid according to the page size
      object-fit: cover;         //mtlb image will cover pura div jismai vo hai . mtlb fill hojayegi pura
    }
    
    cursor: pointer;  
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb( 0 0 0 /73%) 0px 16px 10px -10px;
    
    transition : all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover{
      transform: scale(1.05);
      border: 3px solid rgba(249,249,249,0.8);
      box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb( 0 0 0 /72%) 0px 30px 22px -10px;
    }
  }
`
