import React, { useRef } from 'react'
import axios from 'axios'
function Login() {
    var user = useRef();
    var pass = useRef();

    function myfunc(){
        console.log(user.current.value);
        console.log(user.current.value);
        

        axios.post('https://fakestoreapi.com/auth/login',
           { username:user.current.value , password: pass.current.value}
        )
        .then(res => console.log("success",res))
        .catch(err =>console.log("failure" ,err)
        )

    }

  return (
    <div>
        <h1>Login page</h1>
        <input ref={user} type='text' placeholder='username ' />
        <input ref={pass} type="text" placeholder='password'/>
        <button onClick={myfunc}>Login</button>
    </div>
  )
}

export default Login