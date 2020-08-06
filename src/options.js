import React from "react";
import "./App.css"

function Options(props){
    return <div>
        Option = {props.firstOption}
        {props.secondOption}
        {props.thirdOption}
    </div>
}



export default Options;