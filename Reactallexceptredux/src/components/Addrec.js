import axios from 'axios';
import React from 'react';

export default class Addrec extends React.Component {

  constructor() {
    super();

    this.x1 = React.createRef();
    this.x2 = React.createRef();
    this.x3 = React.createRef();
    this.x4 = React.createRef();
    this.x5 = React.createRef();

    this.func = this.func.bind(this);
  }

  func() {
    axios.post("http://localhost:5050/api/emps/addEmployee", {
      empno: this.x1.current.value,
      ename: this.x2.current.value,
      sal: this.x3.current.value,
      comm: this.x4.current.value,
      deptno: this.x5.current.value
    })
      .then(res => console.log("Employee added:", res.data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Add Employee</h1>

        <input ref={this.x1} placeholder='empno' type='text' /><br />
        <input ref={this.x2} placeholder='emp name' type='text' /><br />
        <input ref={this.x3} placeholder='emp sal' type='text' /><br />
        <input ref={this.x4} placeholder='emp comm' type='text' /><br />
        <input ref={this.x5} placeholder='emp deptno' type='text' /><br />

        <button onClick={this.func}>Submit</button>
      </div>
    )
  }
}
