import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import s from "./ShopAll.module.scss"
import {useDispatch} from "react-redux";
import Stars from './Stars';
import Slider from "react-slider"

const ShopAll =() =>{
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const dipatch = useDispatch()
  const tovar = useSelector(state => state.main.products)
  const clicked = useSelector(state => state.main.clicked)

  const minVal = 100;
  const maxVal = 5000;
  const [values, setValues] = useState([minVal,maxVal])

  const addToCart=(el)=>{
    dipatch({type:"ADD-TO-CART", payload:el})
    dipatch({type:"EMPTY-CART", payload:false})
    dipatch({type:"TOTAL-SUM", payload:el.price})
  }
  const priceFilter=()=>{
    dipatch({type:"PRICE-FILTER", minVal:values[0], maxVal:values[1]})
    
  }
  
  return (
      <div>
        <div className={s.priceRange}>
            <div className={s.priceRange_div}>
                <p className={s.priceRange_header}>Use slider to enter min and max price</p>
                <div className={s.priceRange_value}>{values[0]} ₽ - {values[1]} ₽</div>
                
                <Slider className={s.slider} 
                        onChange={setValues}
                        value={values} 
                        min={minVal} 
                        max={maxVal}/>
            </div>
            <div className={s.priceRange_btnDiv}>
                <button className={s.priceRange_apply} onClick={priceFilter}>Apply</button>
            </div>
        </div>


    <div className={s.main}>      
        {tovar.map((el,key) => {
          return (
          <div data-aos="fade-up" data-aos-duration="1000" className={s.product} key ={key} >
            <div className={s.wrapper}><img className={s.product_pic} src ={el.img} alt=''/></div>
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
      </div>
  );
}


export default ShopAll


