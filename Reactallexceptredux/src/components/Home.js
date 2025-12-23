import React from 'react'
import Product from './Product'

export default function Home() {
  return (
     <div className='container'>
        <div className='row '>
            <div className='col-3'><Product name="Shirt" price="1000"/></div>
            <div className='col-3'><Product name="Jeans" price="2000"/></div>
            <div className='col-3'><Product name="sprite" price="3000"/></div>
            <div className='col-3'><Product name="nike shoes" price="4000"/></div>
        </div>
     </div>
  )
}
