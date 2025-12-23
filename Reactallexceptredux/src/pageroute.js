import { BrowserRouter, Routes , Route } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import App from "./components/App";
import Home from "./components/Home";
import Counter from "./components/Counter";
import ShowUser from "./components/ShowUser";
import GetEmployee from "./components/GetEmployee";
import AddEmployee from "./components/AddEmployee";
import GetDept from "./components/GetDept";
import Showrec from "./components/Showrec";
import SingleMovie from './components/SingleMovie'
import Comp10 from "./components/Comp10";
import Addrec from "./components/Addrec";
import Comp21 from "./components/Comp21";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
let projectroute  = (
    <BrowserRouter>
    <Routes>
        <Route path="" element={<App />}>
            <Route path="" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="newuser" element={<Register/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="showusers" element={<ShowUser/>}/>
            <Route path="emps" element={<GetEmployee/>}/>
            <Route path="addemp" element={<AddEmployee/>}/>
            <Route path="getdept" element={<GetDept/>}/>
            <Route path="showref" element={<Showrec/>}/>
            <Route path="addrec" element={<Addrec/>}/>
            <Route path="comp21" element={<Comp21/>}/>
            <Route path="comp10" element={<Comp10/>}/>
            <Route path="popular" element={<Popular/>}/>
            <Route path="toprated" element={<TopRated/>}/>
            <Route path="upcoming" element={<Upcoming/>}/>
            <Route path="singlemovie/:movieid" element={<SingleMovie/>}/>
            <Route path="counter" element={<Counter value1={100} value2={200}/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
)

export default projectroute;