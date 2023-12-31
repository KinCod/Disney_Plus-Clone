import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



function Head() {
  return (
    <Nav>
      <Logo src="/images/logo.svg"/>
      <NavMenu >
        <a href="#/" className='abc' >
            <img src="/images/home-icon.svg" alt="" />
            <span>HOME</span>
        </a>
        <a href="#/" className='abc'>
            <img src="/images/search-icon.svg" alt="" />
            <span>SEARCH</span>
        </a>
        <a href="#/" className='abc'>
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>WATCHLIST</span>
        </a>
        <a href="#/" className='cc'>
            <img src="/images/original-icon.svg" alt="" />
            <span>ORIGINALS</span>
        </a>
        <a href="#/" className='cc'>
            <img src="/images/movie-icon.svg" alt="" />
            <span>MOVIES</span>
        </a>
        <a href="#/" className='cc'>
            <img src="/images/series-icon.svg" alt="" />
            <span>SERIES</span>
        </a>
      </NavMenu>
      <Link to="/login">
        <UserImag src="https://picsum.photos/200/300"/>
      </Link>
      
    </Nav>
  )
}

export default Head

const Nav = styled.div`
    height : 70px;
    width : 100%;
    background : #090b13;
    display : flex;
    padding : 0 36px;    
    align-items : center;   
    box-sizing: border-box;
    justify-content: space-between;
    
`
const Logo = styled.img`
    width : 80px;

`

const NavMenu = styled.div`
    display : flex;

    
    
    a.cc {
      @media (max-width: 900px) { 
      display: none;
     }
    }
    
    
    a{
        color: white;    
        display : flex;
        align-items : center;
        padding : 0 12px;
        text-decoration: none;
        margin-left : 2px;
        margin-right : 2px;

        img{
          width : 20px;
        }

        span{
          font-size : 13px;
          letter-spacing : 1.42px;
          position: relative;

          &:after{         //mtlb span k after ek aur div hi samajh le (if absolute krdia tab upar hi aa jayega)
            content: "";
            left : 0px;
            right : 0px;
            bottom :-6px;
            position : absolute;
            height : 2px;
            background : white;
            opacity: 0;
            transform-origin: left;      //basically jo element hoga tha will start to show up from the left if we transform to increase the scale of the element
            transform : scaleX(0);
            transition : all 250ms cubic-bezier(0.075, 0.82, 0.165, 1)           //idhar isliye because mainly jo transition hai vo span element pe show hori even when we hove at anchor
          }
        }
        
        //span is a sub container isliye anchor class can access it directly

      &:hover{             //& means the parent container (mtlb we can directly write the name eg.in this case anchor tags)
           span:after{     //jo after use krke we visalized a div jo har ek span k baad aaega, uspe we now did scaling on hover at the anchor tag ( mtlb anchor pe hover toh joh subcontainer span hai uske after wale block ka scalingX 1 krdo)
            transform : scaleX(1); 
            opacity : 100%;         //initially jo anchor k andar span that uska after wala block had scaling 0 and opacity 0 but jab anchor par hover kra dono change kri!!! Now we may be adding transition for smoothness
           }
      }
    }
`

const UserImag = styled.img`
    width : 48px;
    height : 48px;
    border-radius : 50%;  //this makes the thing round
    cursor : pointer;
`
