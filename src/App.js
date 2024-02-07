import React from 'react';
import Head from './components/Head'
import styled from 'styled-components';
import './App.css';
import Home from './components/Home';
import{
  BrowserRouter as Router,
  Route,
  Routes
  }from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';


function App() {
  return (
    <Container className="App">
      <Router>
        <Head/>   {/*Ye sab router mai rhega isliye is not bw Routes*/}
        
        <Routes>
         <Route key={"detail"} path="/detail/:id" element={ <Detail/>}/>  {/* Ye jo :id hai iska mtlb ye router jidhar se link hua udhar se after detail kuch aur send hoga usko id mai store karlena. And phir ye id hum direcltly kahin se bhi acccess kaar skte by its own name*/}
        </Routes>  

        <Routes>
          <Route key={"home"} path="/home" element={<Home/>}></Route>
        </Routes>

        <Routes>
          <Route key={"login"} path="/" element={<Login/>}></Route>
        </Routes>

      </Router>
      
    </Container>
  );
}

export default App;

const Container = styled.div`
`