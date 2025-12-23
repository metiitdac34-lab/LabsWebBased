import React from 'react'
import Comp12 from './Comp12'
import Comp13 from './Comp13'

export default function 
(props) {
  return (
    <div className='border border-5 p-5'>

        <div className='row'>
              <div className='col-3 border border-5 p-4'>
                <Comp12 /> 
              </div>
              <div className='col-9 border border-5 p-4'>
                <Comp13 val = {props.value} /> 
              </div>
        </div>
        
    </div>
  )
}
