import React from "react"


function Record(props){
   
 return(
    <div>
        <h1>{props.name}</h1>
        <p> {props.email} </p>
        <p> {props.phone} </p>
        <p> {props.DOB} </p>
        <img src={props.image} /> 
    </div> 
    )
}
export default Record;