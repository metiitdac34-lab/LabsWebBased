import React, { useContext, useEffect } from 'react'
import contextapi from '../contextapi'
import axios from 'axios';

export default function Comp13(props) {
let data = useContext(contextapi);

 useEffect(()=>{
      console.log("call api",data);
      if(data!=null){
        axios
      .get(`https://restcountries.com/v3.1/name/${data}`)
      .then(res => console.log(res));
      }
      
    
      
 },[data])
  return (
    <div>
        <p>
       { props.val}
        </p>
        <hr /> 
        <p>Using context api : {data}</p>
    </div>
  )
}
