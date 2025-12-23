import React from "react";
import axios from "axios";

export default class Showrec extends React.Component {

  constructor() {
    super();
    this.state = {
      apidata: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5050/api/emps/all")
      .then(res => {
        console.log(res.data);
        this.setState({ apidata: res.data });  // correct way
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1>Show API</h1>

        <table border="1">
          <thead>
            <tr>
              <th>Emp No</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Commission</th>
              <th>Dept No</th>
            </tr>
          </thead>

          <tbody>
            {this.state.apidata.map((emp, index) => (
              <tr key={index}>
                <td>{emp.empno}</td>
                <td>{emp.ename}</td>
                <td>{emp.sal}</td>
                <td>{emp.comm}</td>
                <td>{emp.dept}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    );
  }
}
