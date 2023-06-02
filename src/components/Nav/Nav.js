import { NavLink, useNavigate } from 'react-router-dom';
import s from "./Nav.module.scss"
import logoImg from "../../img/bloom_beauty.png"
import searchImg from "../../img/Search.png"
import accountImg from "../../img/account.png"
import cartImg from "../../img/cart.png"
import {useDispatch, useSelector} from "react-redux";

function Nav() {
  const dipatch = useDispatch()
  const navigate = useNavigate();

  const cartIsEmpty = useSelector(state => state.cart.cartIsEmpty)
  const input = useSelector(state => state.nav.isInput)

  const cartOpen = () => {
    dipatch({type:"OPEN-CART"})
  }
  const showInput = () => {
    dipatch({type:"SHOW-INPUT"})
    !input && navigate("/shopall")
  }
  const processingEnterSymbol = (e) => {
    const text = e.target.value
    console.log(e.target.value);
    dipatch({type:"PROCESSING-ENTER-SYMBOL", text})
  }
  const allProducts = () => {
    dipatch({type:"ALL-PRODUCTS"})
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
        {/* <li >
          <NavLink to="/bestsellers" className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>Bestsellers</NavLink>
        </li>
        <li >
          <NavLink to="/collection" className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>Collection</NavLink>
        </li> */}
        <li >
          <NavLink to="/aboutus" className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>About us</NavLink>
        </li>
        <li >
          <NavLink to="/blog" className={({ isActive }) => isActive ? s.activeLink : s.container_middleItem}>Blog</NavLink>
        </li>
      </ul> 

      <ul className={s.container_rightList}>
        <li className={s.container_rightItem}>
       
            <button className={s.container_linkBlok} >
                <img className={s.container_img} src={searchImg} alt='search' onClick={
                  showInput
                 
                }/>
                {input ? <input className={s.inputSearch} placeholder="Enter the product name"
                onChange={(e)=>processingEnterSymbol(e)}/> : <p className={s.container_text}>Search</p> } 
                {!input && allProducts()}
                
            </button>
      
           
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
                {!cartIsEmpty && <div className={s.fillCart}></div>}
                <p className={s.container_text}>Cart</p> 
            </div>
          </button>
        </li>
      </ul> 
      
      
    </div>
  );
}

export default Nav;
