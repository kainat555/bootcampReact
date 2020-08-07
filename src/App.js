import React, { useState } from 'react';
import './App.css';
import Info from './info.js';
import Options from "./options.js";
import Tech from "./tech.js";
import Test from "./test.js";





// function App() {
//   return (
//     <div className="main">
//       <h1>Hello World from me</h1>
//       <Info name="Ali" age="30" profession="lecturer"/>
//       <Info name="Aliyan" age="20" profession="Web developer"/> 

//       <h3>Following career options are below:</h3>
//       <Options firstOption="Medical"/>
//       <Options secondOption="Engineering"/>
//       <Options thirdOption="Computer"/>

//       <h3>Front-end technologies are:</h3>
//       <Tech tech="HTML"/>  
//       <Tech tech="CSS"/>      
//       <Tech tech="javascript"/>      
//       <Tech tech="react"/> 

//       <h3>Back-end technologies are:</h3> 
//       <Tech tech="node.js"/>
//       <Tech tech="php"/>
//       <Tech tech="django"/>    


//       <h4>Here I'm for learning React</h4>
//       <Test fun="It's fun to learn react from PIAIC teachers"/>
//       <Test option="Yes"/> 
//       <Test option="No"/>

//     </div>

//   );
// }


// export default App;

export default function App(){
 let[count,setCount] = useState(0)
return(
<div>
  <h1>Counter App through React</h1>
  <h3>Value of a counter variable is: {count}</h3>
  <button onClick={
    () => setCount(++count)
  }>
    upgrade value
  </button>
  <button onClick={
    () => setCount(--count)
}>
    degrade value
  </button>
</div>

)


}