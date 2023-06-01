import React from 'react';
import {useSelector} from "react-redux";
import s from "./ShopAll.module.scss"
import {useDispatch} from "react-redux";
import Stars from './Stars';

const ShopAll =() =>{
  const dipatch = useDispatch()
  const tovar = useSelector(state => state.main.products)
  // const cart = useSelector(state => state.cart.cart)

  const addToCart=(el)=>{
    dipatch({type:"ADD-TO-CART", payload:el})
  }
  return (
    <div className={s.main}>    
      {tovar.map((el,key) => {
        return (
        <div data-aos="fade-up" data-aos-duration="1000" className={s.product} key ={key} >
          <img className={s.product_pic} src ={el.img} alt=''/>
          <p className={s.product_header}>{el.title}</p>
          <Stars starsCount = {el.stars}/>
          <p className={s.product_desc}>there should be a product description here</p>
          <p className={s.product_price}>{el.price} ₽</p>
          <button className={s.product_btn} onClick={()=>addToCart(el)}>Add to bag</button>
        </div>)
})}
    </div>
  );
}


export default ShopAll


