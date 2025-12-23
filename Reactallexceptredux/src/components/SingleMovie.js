import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
export default function SingleMovie() {
  let[movie, setMovie] = useState();
  let[cast,setCast] = useState();
  let urldata = useParams();
  console.log(urldata);

  useEffect(()=>{
         let Api_key = 'c45a857c193f6302f2b5061c3b85e743'
         axios.get(`https://api.themoviedb.org/3/movie/${urldata.movieid}?api_key=${Api_key}&language=en-US`)
         .then((res) =>{
          console.log(res.data);
          setMovie(res.data)
        
         })

         axios.get(`https://api.themoviedb.org/3/movie/${urldata.movieid}/credits?api_key=${Api_key}&language=en-US`)
         .then((res) =>{
          console.log(res.data);
          setCast(res.data)

         })
  },[])

  return (
    <div>
     
      
    </div>
  )
}
