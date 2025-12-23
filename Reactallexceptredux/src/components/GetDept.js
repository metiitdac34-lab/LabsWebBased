import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function GetDept() {
let deptno = useRef()
let deptname = useRef()
let location = useRef()
    
function myfun(){
    // http://localhost:5050/api/depts/addDept
       axios.post('http://localhost:5050/api/depts/addDept', {
        deptno: deptno.current.value,
        deptname: deptname.current.value,
        location: location.current.value
       })
       .then(res => console.log(res.data))
       .catch(err => console.error(err))
       
    }
   
  return (
    <div>

        <h1>Add Department</h1>
        <input ref={deptno} type='text' placeholder='Enter dept no'/>
        <input ref={deptname} type='text' placeholder='Enter dept name'/>
        <input ref={location} type='text' placeholder='Enter dept location'/>
        <button onClick={myfun}>Submit</button>
    </div>
    
  )
}

export default GetDept