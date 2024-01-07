import React from 'react'
import styled from 'styled-components'

function Login() {

    const show = ()=>{
        window.alert("Login Using the Login Button");
    }

  return (
    <Container>
        <Contentbox>
            <Cb1 src='images/cta-logo-one.svg '/>
            <SignUp onClick={show}>GET ALL THERE</SignUp>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cupiditate, nemo delectus recusandae itaque, quam expedita in aut laudantium rerum dolorem deserunt repudiandae asperiores, suscipit natus ipsam eius ex et!</Desc>
            <Logo src='images/cta-logo-two.png '/>
        </Contentbox>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);

    &:before{
        opacity: 0.7;
        content:"";
        background: url("/images/login-background.jpg")center /cover fixed no-repeat; //we use background size property which has "cover,contain,etc" properties jaise object-fit mai hota and same hi kaam hota
        position: absolute;   //the before div we're making is absolute and uspar jo background hai vo fixed hai dono ka parent container hi hai
        top:0; left:0; right:0; bottom:0;
        z-index: -1;     
    }

    display: flex;
    align-items: start;
    justify-content: center;
`

const Contentbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width : 650px;
    padding : 80px 40px;
    width: 80%;
`
const Cb1 = styled.img`
    
    
`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight : bold;
    padding : 17px 0;
    color : #f9f9f9;
    border-radius: 4px;
    font-size : 18px ;
    cursor : pointer; 

    transition : all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    letter-spacing: 1.5px;
 

    &:hover{
        background-color : #0483ee;
    }
`
const Desc  = styled.p`
    font-size: 11px;
    letter-spacing : 1.5px;
    text-align : center;
    margin-top: 5px;
    line-height : 1.5;
`
const Logo = styled.img`
    width: 100%;
`