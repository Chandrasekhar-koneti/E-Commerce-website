import React, {useContext, useState } from 'react';
import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Button from './Components/Button';
// import AvailableProducts from './Components/Products/AvailableProduct'
// import CartItem from './Components/Cart/CartItem';
// import CartProvider from './Components/Store/CartProvider';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Store from './Components/Pages/Store';
import Contact from './Components/Pages/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './Components/Products/ProductDetails';
import Login from './Components/Pages/Login';
import AuthContext, { AuthContextProvider } from './Components/Store/Auth-context';
import {  Route, Switch } from 'react-router-dom';




// const router1=createBrowserRouter([
  
//   {path:'/',element:<Home />},
//   {path:'/about',element:<About />},
//   {path:'/store',element:<Store />},
//   {path:'/contact',element:<Contact />},
//   {path:'/product/:id',element:<ProductDetail />},
//   {path:'/login',element:<Login />},
//   // !isLoggedIn && {path:'/store'}
// ])

function App() {

  const Authctx=useContext(AuthContext)
  const isLoggedIn=Authctx.isLoggedIn

// const router1=createBrowserRouter([
  
//   {path:'/',element:<Home />},
//   {path:'/about',element:<About />},
//   {path:'/store',element:<Store />},
//   {path:'/contact',element:<Contact />},
//   {path:'/product/:id',element:<ProductDetail />},
//   {path:'/login',element:<Login />},
 

// ])

  const [cartstatus,setcartstatus]=useState(false)
  const showcartlist=()=>{
    setcartstatus(true)
  }

  const hidecartlist=()=>{
    setcartstatus(false)
  }

  return (

    <AuthContextProvider>
      <Switch>
       
        <Route path = "/about">
            <About/>
        </Route>
        <Route path = "/Contact">
          <Contact/>
        </Route>
        <Route path = "/Login" >
            <Login/>
        </Route>
        <Route path="/" exact>
            <Home />
        </Route >
    
        <Route path = "/Store/ProductDetail/:productId">
          <ProductDetail/>
        </Route>
       
      {!isLoggedIn &&(
        <Route path='/Store'>
          <h1>Login to view store items</h1>
        </Route>
      )}

       {isLoggedIn && (
        <Route path='/Store'>
           {/* <Header opencarthandler={showcartlist}/>
      {cartstatus && <CartItem onClick={hidecartlist}/>}
      <AvailableProducts/>
      <Button opencarthandler={showcartlist} />
      <Footer /> */}
          <Store />
        </Route>
       )}
       <Route path='/Store'>
        <Store />
       </Route>
       <Route path='' exact>
        <Home />
       </Route>
       </Switch>
       
     
    </AuthContextProvider>
  );
}

export default App;
