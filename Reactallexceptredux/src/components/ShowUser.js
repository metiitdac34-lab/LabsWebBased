import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ShowUser() {
    let[apidata , setapidata] = useState();
    useEffect(()=>{
        console.log("Api called");
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            console.log(res);
            console.log(res.data);
            setapidata(res.data)
            
        },[])
    })
  return (
    <>
    {
        apidata && apidata.map(val => <div className='col-3'>
            <img  src={val.image}/>
                <p>{val.title}</p>
                <p>$ {val.price}</p>
     
        </div>)
    }
    </>
  
  )
}

export default ShowUser