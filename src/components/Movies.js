import React from 'react'
import styled from 'styled-components'

import { selectMovies } from '../features/movie/movieSlice'  //Importing List of all the movies
import { useSelector } from 'react-redux'

function Movies() {

  const movies = useSelector(selectMovies);   //selected all the movies and pushed into the movies variable 


  return (
    <Container>
      <h4>Recommended for You</h4>

      <Content>
        { movies &&     //agar movies exist
          movies.map((movie)=>{
            return <div>
              <img src={movie.item.cardImg}  alt=''/>
            </div>
          })
        }
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
