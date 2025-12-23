import React from 'react';
import { Link } from 'react-router';
function Header(){
    return( 
    <>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
 
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/newuser">Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/emps">Get Employee</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/addemp">ADD Employee</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/counter">State useEffect</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/showusers">show users</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/getdept">Add dept</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/addrec">Add record</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/showref">Show record</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/comp10">Parent child</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/comp21">Comp 21</Link>
        </li> */}
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/popular">Popular Movies</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/upcoming">Upcoming Mov1es</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/toprated">Top rated</Link>
        </li>
       
       
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
        )
}

export default Header;