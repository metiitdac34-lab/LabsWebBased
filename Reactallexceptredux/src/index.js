import React from 'react'
import ReactDom from 'react-dom/client';
import './footer.css'

import App from './components/App';
import projectroute from './pageroute';
console.log(React);
console.log(ReactDom);



//jsx -> combination of rendering part and user variables

// console.log("Hello world");
const app = ReactDom.createRoot(document.getElementById('root'));
console.log(app);


// var userName = "Mayur"
// var userAge = 20;

// // app.render(<h1 className='text-danger'>Hello REACT App</h1>)

// //because of babel compiler we can perform jsx syntax
// app.render(
// <>
 
//  <h3>Username is  : {userName}</h3>
//  <p>user age is : {userAge}</p>

//  </>
// )



// New section *************************

// function Product(){
//     return(
//        <div>
//         <h1>2000</h1>
//         <p>Shirt</p>
//         <button>Add to cart</button>
//        </div> 
//     )
// }
// app.render(
// <>
// <Header />
// <Product/>
// <Home />
// <Footer/>
// </>)






/////new section ******************

app.render(projectroute);