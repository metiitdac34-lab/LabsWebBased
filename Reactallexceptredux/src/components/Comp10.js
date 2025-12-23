import React, { useRef, useState } from 'react'
import Comp11 from './Comp11'
import contextapi from '../contextapi';

export default function Comp10() {
    let[country , setCountry] = useState('');
    let x1 = useRef();
    function myfunc(){
        console.log(x1.current.value);
        setCountry(x1.current.value);
        
    }
  return (
   <div className='container border border-5 p-5'>
    <h1>Search Country</h1> <br />
    <input ref={x1} type='text' placeholder='Enter country name' /> <br />
    <button onClick={myfunc}>Search</button><br />
    <hr />
    <contextapi.Provider value={country}>
    {/* <Comp11 value ={country} /> */}
    <Comp11 value={country}/>
    </contextapi.Provider>                                                                                
   
   </div>
  )
}
