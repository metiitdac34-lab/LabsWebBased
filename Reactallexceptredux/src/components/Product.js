import React from 'react'

export default function Product(props) {

    function myfunc(){
        props.price = 900;// props are readonly they are immutable
    }
  return (
    <div>
        <h4>{props.name}</h4>
        <p>{props.price}</p>
        <button onClick={myfunc}>Add to cart</button>
    </div>
  )
}
