import React from "react";


function Info(props){
     return(
         <div>
          Name = {props.name} <br></br>
     Age = {props.age} <br></br>
     profession={props.profession};
     </div>
     )
}


export default Info;