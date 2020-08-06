import React from 'react';
import './App.css';
import Info from './info.js';
import Options from "./options.js";
import Tech from "./tech.js";
import Test from "./test.js";
import Demo from "./demo.js";



function App() {
  return (
    <div>
      <h1>Hello World from me</h1>
      <Info name="Ali" age="30" profession="lecturer"/>
      <Info name="Aliyan" age="20" profession="Web developer"/> 
  
      <h3>Following career options are below:</h3>
      <Options firstOption="Medical"/>
      <Options secondOption="Engineering"/>
      <Options thirdOption="Computer"/>

      <h3>Front-end technologies are:</h3>
      <Tech tech="HTML"/>  
      <Tech tech="CSS"/>      
      <Tech tech="javascript"/>      
      <Tech tech="react"/> 

      <h3>Back-end technologies are:</h3> 
      <Tech tech="node.js"/>
      <Tech tech="php"/>
      <Tech tech="django"/>    


      <h4>Here I'm for learning React</h4>
      <Test fun="It's fun to learn react from PIAIC teachers"/>
      <Test option="Yes"/> 
      <Test option="No"/>
      
      <h3>Hello</h3>
    </div>

  );
}


export default App;
