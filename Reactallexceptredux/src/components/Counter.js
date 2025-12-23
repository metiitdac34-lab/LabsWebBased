import React, { useState, useEffect } from 'react'

export default function Counter(props){

    let[username, setuser] = useState("mayur");
    let[userage , setage] = useState(20);
    let[userdegree, setdegree] = useState(['BE', 'ME']);


    //useEffect hook will be called on mounting and changes in a state variable
    useEffect(()=>{
      console.log("useeffect called ", Math.random());
      
    })
    //conditional rendering
    //called only once on mounting
    useEffect(()=>{
       console.log("empty array useeffect called" , Math.random());
       
    },[])

    //conditional rendering
    //called on every name change and om mounting
    useEffect(()=>{
        console.log("called on value change" , Math.random());
        
     },[username])

     //when we leave the component the return will work same as destructor in java
     useEffect(()=>{
        console.log("return type" , Math.random());
        
        return ()=>{
            console.log("hello world")
        }
     },[])
    


    function func1(){
        props.value1 = 1200
    }

    function func2(){
        // console.log(typeof setuser);
        
        setuser("Sam");
        setage((x) => x+1);
        setdegree(["hsc", "ssc"])

    }
  return (
    <div className='container'>
        <h1>State variable, useEffect Hook</h1>

        <p>
            Props : {props.value1} {props.value2}
        </p>

        <p>User name : {username}</p>
        <p>User age : {userage}</p>
        <p>User degreee : {userdegree[0]}</p>
        <p>User degreee : {userdegree[1]}</p>
        <button onClick={func1}>Change props</button>
        <button onClick={func2}>Change state var</button>
        
        
    </div>
  )
}
