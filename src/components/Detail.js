import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import db from '../data.json'
import { useParams} from 'react-router-dom'         //the extra things written in router which will be filled by link is known as parameters
                                                //as id has been sent toh uska use hum krenge to populate the detail page
function Detail() {
    const { id } = useParams();
    const [movie,setMovie] = useState();
   
    //console.log(id);                               //ab details k pas id aa gyi hai and iss id ka use krke we want info of the current movie

    useEffect(()=>{              
        //now accessing the data related to id from the database
        
        db.payload.items.forEach((item)=>{      //saare elements dekhe and jahan condition full fill huiye vo item stored into the state
            if(item.id == id) setMovie(item);
        })
        
    },[])

  return (
    <Container>
        { movie && 
            <>
                <BackG>
                    <img src={movie.backgroundImg} alt="" />
                </BackG>
                <ImageTitle>
                    <img src={movie.titleImg} alt="" />
                </ImageTitle>
                <Controls>
                    <button className='a'>
                        <img src="/images/play-icon-black.png" alt="" />
                        PLAY
                    </button>
                    <button className='b'>
                        <img src="/images/play-icon-white.png" alt="" />
                        TRAILER
                    </button>
                    <button className='c'>
                        +
                    </button>
                    <button className='d'>
                        <img src="/images/group-icon.png" alt="No img" />
                    </button>
                </Controls>
                <Subtitle>
                    {movie.subTitle}
                </Subtitle>
                <Title>
                    {movie.description}
                </Title> 
            </>
            }
        
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh-70px);      //70px = heading
    padding : 0 calc(3.5vw + 5px);
    overflow: hidden;
    position : relative;
`
const BackG = styled.div`
    z-index: -1;
    position : fixed ;    //as it is fixed toh sab iske upar aaenge(because z index == -1)
    top : 0;
    left: 0;
    right: 0;
    bottom :0;  
    opacity : 0.8;
    
    img{
        width:100%;
        height: 100%;
        object-fit: cover; //image stretched to fill the the div it is in and will change its size relative to the div
    } 
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width : 40vw;
    min-width: 200px;
    img{
        width:100%;
        height: 100%;
        object-fit: contain;      //this helps the image to not stretch or try to fill the whole div
    }

`

const Controls = styled.div`
    display: flex;
    align-items: center;
    
    button{
        cursor: pointer;
    }

    button.b{
        &:hover{
            transform: scale(1.03);
        }
    }

    button.a{
        padding : 5px 24px;
        font-weight: bold;
        font-size: 15px;
        margin-right: 22px;
        border-radius : 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(249,249,249);
        border: none;
        letter-spacing: 1.8px;
        &:hover{
            background-color: rgb(198,198,198);
        }

    }

    button.b{
        padding : 5px 24px;
        font-weight: bold;
        font-size: 15px;
        border-radius : 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.3);
        color: rgb(249,249,249);
        border: 1px solid rgb(249,249,249);
        letter-spacing: 1.8px;
        margin-right: 22px;
        
        }

    button.c{
        width: 44px;
        height: 44px;
        display: flex;
        font-size: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color:  rgba(0,0,0,0.6);
        border: 1px solid white;
        margin-right: 22px;
        color: white;

        
    }

    button.d{
        width: 44px;
        height: 44px;
        display: flex;
        font-size: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color:  rgb(0,0,0);
        border: 1px solid white;

        img{
            width:120%;
            height:110%;   
            object-fit: contain;
            color: white;
        }
    }


`

const Subtitle = styled.div`
    text-align: left;
    color : rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Title = styled.div`
    text-align: left;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color : rgb(249,249,249);
`