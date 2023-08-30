import React from 'react'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import CartDetails from './CartDetails'
import Success from './Success';
import Home from './Home';
import Cancel from './Cancel';


function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails/>}/>
      <Route  path='/sucess' element={<Success />}/>
      <Route  path='/cancel' element={<Cancel />}/>
     </Routes>
    </div>
  );
}

export default App;
