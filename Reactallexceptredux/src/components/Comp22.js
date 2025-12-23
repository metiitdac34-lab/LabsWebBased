import React from 'react'

export default function Comp22(props) {
    function myfunc(ev){
          console.log(ev.target.innerText);
          props.p1(ev.target.innerText);
          
    }
  return (
    <div>
        <h5>Categories comp22</h5>
        <ul>
            <li onClick={myfunc}>electronics</li>
            <li onClick={myfunc}>jewelery</li>
            <li onClick={myfunc}>men's clothing</li>
            <li onClick={myfunc}>women's clothing</li>
        </ul>
    </div>
  )
}
