import React from "react";

const Message =(props)=>{
return(
  <div><h1>{props.header}</h1>
  <p>{props.text}</p>
  </div>
)
}

export default Message;