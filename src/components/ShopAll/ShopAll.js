import React from 'react';
import {useSelector} from "react-redux";
import s from "./ShopAll.module.scss"
import {useDispatch} from "react-redux";
import Stars from './Stars';

const ShopAll =() =>{
  const dipatch = useDispatch()
  const tovar = useSelector(state => state.main.products)
  const clicked = useSelector(state => state.main.clicked)


  const addToCart=(el)=>{
    dipatch({type:"ADD-TO-CART", payload:el})
    dipatch({type:"EMPTY-CART", payload:false})
    dipatch({type:"TOTAL-SUM", payload:el.price})
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
          <button id ={el.id} className={s.product_btn} onClick={()=>{
            addToCart(el)         
            dipatch({type:"CLIK-BUTTON"})
            setTimeout(()=> dipatch({type:"CLIK-BUTTON"}),1000)      
          }}>Add to bag</button>
        </div>)
})}
    {clicked && <div  data-aos="fade-right" data-aos-duration="500" className={s.productAdded}> ✓ product added</div>}
    </div>
  );
}


export default ShopAll


