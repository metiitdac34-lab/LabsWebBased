import React, { useState } from 'react'
import Comp22 from './Comp22'
import Comp23 from './Comp23'
export default function Comp21() {
    let[data,setData] = useState('')
    function function21(category){
        console.log("Called function21",category);
        setData(category)
        
    }
  return (
    <div className='container border border-5 p-5'>
        <h3>State lift, comp21 {data}</h3>
        <hr />
        <div className='row'> 
            <div className='col-4 border border-5 p-5'>
                <Comp22 p1={function21}/>
            </div>
            <div className='col-8 border border-5 p-5'>
                <Comp23 p2={data}/>


            </div>
        </div>
    </div>
  )
}
