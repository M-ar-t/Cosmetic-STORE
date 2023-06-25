import { NavLink, useNavigate } from 'react-router-dom';
import s from "./Nav.module.scss"
import logoImg from "../../img/bloom_beauty.png"
import searchImg from "../../img/Search.png"
import accountImg from "../../img/account.png"
import cartImg from "../../img/cart.png"
import {useDispatch, useSelector} from "react-redux";
import { useState } from 'react';
import closeBurger from "../../img/closeBtn.png"
function Nav() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const cartIsEmpty = useSelector(state => state.cart.cartIsEmpty)
  const input = useSelector(state => state.nav.isInput)

  const cartOpen = () => {
    burgerMenuShow()
    dispatch({type:"OPEN-CART"})
  }
  const accountOpen = () => {
    burgerMenuShow()
    dispatch({type:"OPEN-ACCOUNT"})
  }
  const showInput = () => {
    dispatch({type:"SHOW-INPUT"})
    !input && navigate("/shopall")
  }

  const processingEnterSymbol = (e) => {
    const text = e.target.value
    dispatch({type:"PROCESSING-ENTER-SYMBOL", text})
  }
  const allProducts = () => {
    dispatch({type:"ALL-PRODUCTS"})
  }
  const[toggle, setToggle] =useState(false)

  const burgerMenuShow =() =>{
    setToggle(!toggle)
}
  const handleKeypress = e => {
    if (e.code === "Enter") {
      burgerMenuShow()
    }
  };
  return (

    <div className={s.continer}>   
      <ul>
        <li className={s.container_leftList}>
            <NavLink  to="/" onClick={burgerMenuShow} ><img src={logoImg} alt='logo'/></NavLink>
        </li>
      </ul>
      <div className={toggle? s.burgerNone:s.burger}
      onClick={burgerMenuShow}></div>

     
      <div className={toggle? [s.continer__inner, s.activeBurgerMenu].join(" "):s.continer__inner}>
          <div className={toggle? [s.closeBtn, s.activecloseBtn].join(" "):s.closeBtn}
         onClick={burgerMenuShow}>
                    <img className={s.closeBtn__pic} 
                    src={closeBurger} alt=""/>
          </div>
          <ul className={s.container_middleList}>
            <li > 
                  <NavLink  to="/shopall"  onClick={burgerMenuShow} className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>Shop All</NavLink>
            </li>
          
            <li >
              <NavLink to="/aboutus"  onClick={burgerMenuShow} className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>About us</NavLink>
            </li>
            <li >
              <NavLink to="/blog"  onClick={burgerMenuShow} className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>Blog</NavLink>
            </li>
          </ul> 

          <ul className={s.container_rightList}>
            <li className={s.container_rightItem}>
          
                <button className={s.container_linkBlok} >
                    <img className={s.container_img} src={searchImg} alt='search' onClick={
                      showInput
                    
                    }/>
                    {input ? <input className={s.inputSearch} placeholder="Enter the product name"
                    onKeyPress={(e)=>handleKeypress(e)}
                    onChange={(e)=>processingEnterSymbol(e)}/> : <p className={s.container_text}>Search</p> } 
                    {!input && allProducts()}
                    
                </button>
          
              
            </li>
            <li className={s.container_rightItem}>
            <button onClick={accountOpen} >
                <div className={s.container_linkBlok}>
                <img className={s.container_img} src={accountImg} alt='account'/>
                <p className={s.container_text}>Account</p> 
                </div>
              </button>

            </li>
            <li className={s.container_rightItem}>

            <button onClick={cartOpen}>
                <div className={s.container_linkBlok}>
                    <img className={s.container_img} src={cartImg} alt='cart'/>
                    {!cartIsEmpty && <div className={s.fillCart}></div>}
                    <p className={s.container_text}>Cart</p> 
                </div>
              </button>
            </li>
          </ul> 
      </div>
      
    </div>
  );
}

export default Nav;
