import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './Components/Layer/RootLayOut';
import Home from './Components/Page/Home';
import About from './Components/Page/About';
import Shop from './Components/Page/Shop';
import Contact from './Components/Page/Contact';
import Journal from './Components/Page/Journal';
import SignUp from './Components/Page/SignUp';
import Login from './Components/Page/Login';
import ProductDetails from './Components/Page/ProductDetails';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>

      <Route index element ={<Home/>} />   
      <Route path='/products' element ={<Shop />} > </Route>      
      <Route path='/products/details' element ={<ProductDetails />} > </Route>      
      <Route path='/about' element ={<About />} > </Route>      
      <Route path='/contact' element ={<Contact />} > </Route>      
      <Route path='/journal' element ={<Journal />} > </Route>   
      <Route path='/sign/up' element ={<SignUp/>} > </Route>   
      <Route path='/login' element ={<Login/>} > </Route>   
    </Route>
  )
);




const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App