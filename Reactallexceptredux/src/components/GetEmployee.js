import React, { useEffect, useState } from 'react'
import axios from 'axios'
function GetEmployee() {
  let[emp,setEmp] = useState(); 
  useEffect(()=>{
        axios.get('http://localhost:5050/api/emps/all')
        .then(res =>{
          console.log(res);
          
          setEmp(res.data);
        }
        
      )
        .catch(err=>console.log(err))

        
        
  },[])
  
  return (
    <div className='container'>
     <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Salary</th>
      <th>Commission</th>
      <th>EmpNo</th>
      <th>Deptno</th>
    </tr>
  </thead>

  <tbody>
    
  {
    emp && emp.map(val => <tr>
      <td>{val.ename}</td>
      <td>{val.salary}</td>
      <td>{val.comm}</td>
      <td>{val.empno}</td>
      <td>{val.deptno}</td>
    </tr>)
  }
  </tbody>
</table>


    </div>
  )
}

export default GetEmployee