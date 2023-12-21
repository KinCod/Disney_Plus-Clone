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
         <Route key={"detail"} exact path="/detail" element={ <Detail/>}/>
        </Routes>  

        <Routes>
          <Route key={"home"} path="/" element={<Home/>}></Route>
        </Routes>

        <Routes>
          <Route key={"login"} path="/login" element={<Login/>}></Route>
        </Routes>

      </Router>
      
    </Container>
  );
}

export default App;

const Container = styled.div`
`