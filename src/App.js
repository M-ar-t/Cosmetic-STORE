import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import ShopAll from './components/ShopAll/ShopAll';
import Bestsellers from './components/Bestsellers/Bestsellers';
import Collection from './components/Collection/Collection';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Account from './components/Account/Account';
import Cart from './components/Cart/Cart';
import Nav from './components/Nav/Nav';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { Suspense } from 'react';
import Preloader from './components/Preloader/Preloader';
import { useSelector } from 'react-redux';


// ..
AOS.init();
function App() {
  const ShopAll = React.lazy(() => import('./components/ShopAll/ShopAll'));
  const cartShow = useSelector(state => state.cart.cartIsOpen)

  return (

    <div className="App">  
      {cartShow && <Cart/>}  
      <Nav/>
      <Suspense fallback ={<Preloader/>}>
      <Routes>
       
            <Route  exact path='/' element={<Home/>} />
            <Route path='/shopall' element={<ShopAll/>} />
            <Route path='/bestsellers' element={<Bestsellers/>} />
            <Route path='/collection' element={<Collection/>} />
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/cart' element={<Cart/>} />
    
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
