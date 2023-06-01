import { NavLink } from 'react-router-dom';
import s from "./Nav.module.scss"
import logoImg from "../../img/bloom_beauty.png"
import searchImg from "../../img/Search.png"
import accountImg from "../../img/account.png"
import cartImg from "../../img/cart.png"
import {useDispatch} from "react-redux";
// import Cart from '../Cart/Cart';

function Nav() {
  const dipatch = useDispatch()

  const cartOpen = () => {
    dipatch({type:"OPEN-CART"})
  }

  return (
    <div className={s.continer}>   
      <ul>
        <li className={s.container_item}>
            <NavLink  to="/" ><img src={logoImg} alt='logo'/></NavLink>
        </li>
      </ul>

      <ul className={s.container_middleList}>
        <li > 
              <NavLink  to="/shopall" className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>Shop All</NavLink>
        </li>
        <li >
          <NavLink to="/bestsellers" className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>Bestsellers</NavLink>
        </li>
        <li >
          <NavLink to="/collection" className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>Collection</NavLink>
        </li>
        <li >
          <NavLink to="/aboutus" className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>About us</NavLink>
        </li>
        <li >
          <NavLink to="/blog" className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>Blog</NavLink>
        </li>
      </ul> 

      <ul className={s.container_rightList}>
        <li className={s.container_rightItem}>
          <NavLink to="/search" >
            <div className={s.container_linkBlok}>
                <img className={s.container_img} src={searchImg} alt='search'/>
                <p className={s.container_text}>Search</p> 
            </div>
          </NavLink>
        </li>
        <li className={s.container_rightItem}>
        <NavLink to="/account" >
            <div className={s.container_linkBlok}>
            <img className={s.container_img} src={accountImg} alt='account'/>
            <p className={s.container_text}>Account</p> 
            </div>
          </NavLink>

        </li>
        <li className={s.container_rightItem}>

        <button onClick={cartOpen}>
            <div className={s.container_linkBlok}>
            <img className={s.container_img} src={cartImg} alt='cart'/>
            <p className={s.container_text}>Cart</p> 
            </div>
          </button>
        </li>
      </ul> 
      
    </div>
  );
}

export default Nav;
