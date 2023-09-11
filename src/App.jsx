import React from "react";
import Survey from "./components/Home";
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import { useParams } from "react-router-dom";
    
const Home = (props) => { 
    
  return (
    <h1>Welcome</h1>
  );
}
const Number = () =>{
  const {Int} =useParams();
  return(
    <h1>The number is {Int}. </h1>
  )
}
const Hello = () =>{
  const {word,color,background} =useParams();
  const textStyle ={
    color: `${color}`,
    backgroundColor:`${background}`
  }
  return(
    <h1 style={textStyle}>The word is {word}</h1>
  )
}

    
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={< Home/>}/>
        <Route path="/:Int" element={< Number/>}/>
        <Route exact path="/:word" element={< Hello/>}/>
        <Route path="/:word/:color/:background" element={< Hello/>}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App;
