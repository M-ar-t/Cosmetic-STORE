import {useDispatch, useSelector} from "react-redux";
import s from "./Cart.module.scss"
import closeBtn from "../../img/closeBtn.png"
import deleteProductPic from "../../img/deleteProduct.png"


const Cart = () => {

  const cart = useSelector(state=>state.cart.cart)
  const totalSum = useSelector(state=>state.cart.totalSum)
  const dipatch = useDispatch()

  cart.length < 1 && dipatch({type:"EMPTY-CART",payload:true})

  const cartClose = () => {
    dipatch({type:"OPEN-CART"})  
  }

  const countIncrement = (id,price) => {
    dipatch({type:"COUNT-INCREMENT", id})
    dipatch({type:"TOTAL-SUM", payload:price})
  }

  const countDecrement = (id,price) => {
    dipatch({type:"TOTAL-SUM-DEC", payload:{price,id}})
    dipatch({type:"COUNT-DECREMENT", id})
  }

  const getAmount = (id) =>{
    return  cart.map(el => el.id === id && el.count)
    }
  const deleteProduct = (id, count, price) =>{
    const priceReady = count * Number(price.replace(' ',''))
    dipatch({type:"TOTAL-SUM-DEC-ALL", payload:{priceReady, id}})
    dipatch({type:"DELETE-PRODUCT", id})
    }


  return (
      <div className={s.main} >
        <div className={s.header}>
          <p className={s.header_text}>Cart</p>
          <img src={closeBtn} alt="" onClick={cartClose} className={s.header_closeCart}/>
        </div>
        <div className={s.line}></div>
        {cart.length<1 ? 

        <div className={s.cartEmpty}>the cart is empty</div> : 

        <div className={s.cartContents}>
          {cart.map((el,key) => {
            return(
              <div key={key}>
                <div className={s.cartItem}>
                  <div ><img className={s.cartItem_img} src ={el.img} alt=''/></div>
                  <div className={s.cartItem_desc}>
                     <p className={s.cartItem_title}>{el.title}</p>
                     <p className={s.cartItem_price}>{el.price} ₽</p>
                     <div className={s.btnAndDelBlok}>
                        <div className={s.cartItem_btnBlok}>
                            <button className={s.cartItem_btnMinus} onClick={()=>countDecrement(el.id, el.price)}>-</button>
                            <div className={s.cartItem_amount}>{getAmount(el.id)}</div>
                            <button className={s.cartItem_btnPlus} onClick={()=>countIncrement(el.id,el.price)}>+</button> 
                        </div>
                        <button className={s.deleteProductBtn}>
                            <img src={deleteProductPic} alt="" className={s.deleteProductPic} onClick={()=>deleteProduct(el.id,el.count, el.price)}/>
                        </button>
                     </div>
                  </div>
              </div>
              <div className={s.line}></div>
            </div>
            )
        })}
        </div>
}
        <div className={s.main_itog}>
           <div className={s.line}></div>
           <div className={s.subtotal}>
              <div className={s.subtotal_text}>Subtotal</div>
              <div className={s.subtotal_price}>{totalSum} ₽</div>
           </div>
           <button className={s.itogBtn}>Chek out</button>
        </div>
      </div>
    
  );
}

export default Cart;
