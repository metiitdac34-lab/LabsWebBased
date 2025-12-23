import React, { useRef } from 'react'
import axios  from 'axios';
 function AddEmployee() {
    let empno = useRef();
    let ename = useRef();
    let sal = useRef();
    let comm = useRef();
    let deptno = useRef();

   function myfunc(){
    console.log({
        empno: empno.current.value,
        ename: ename.current.value,
        sal: sal.current.value,
        comm: comm.current.value,
        deptno: deptno.current.value
    });
   
    axios.post('http://localhost:5050/api/emps/addEmployee' , {
        empno:empno.current.value,
        ename:ename.current.value,
        sal:sal.current.value,
        comm:comm.current.value,
        deptno:deptno.current.value
    })
    .then(res => console.log(res.data))
.catch(err => console.error(err));
}
  return (
    <div>
        <h1>Add Employee</h1>
        <input ref={empno} placeholder='empno' type='text' ></input>
        <input ref={ename} placeholder='emp name' type='text' ></input>
        <input ref={sal} placeholder='emp sal' type='text' ></input>
        <input ref={comm} placeholder='emp comm' type='text' ></input>
        <input ref={deptno} placeholder='emp deptno' type='text' ></input>
        <button onClick={myfunc}>Submit</button>
    </div>
  )
}


export default AddEmployee;