import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
export default function Upcoming() {
  let[data, setData] = useState([]);

    useEffect(()=>{
      let Api_key = `c45a857c193f6302f2b5061c3b85e743`
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`)
        .then(res=>{
          console.log(res.data);
          console.log(res.data.results);
          setData(res.data.results);
        })
        .catch(err=>{
          console.log(err);
          
        })
    },[])
  return (
    
   
      <div className='container'>
        <h2>Upcoming Movies</h2>
        <hr />
        <div className='row'>
          {
            data && data.map(
              value => <div className='col-3 p-3 text-center text-danger'>
                <img className='img-fluid rounded-3' src={"https://image.tmdb.org/t/p/w500"+value.poster_path} />
                <p><Link to={"/singlemovie/" + value.id}>{value.title}</Link></p>
              </div>
            )
          }
        </div>
  
      </div>
  )
}
