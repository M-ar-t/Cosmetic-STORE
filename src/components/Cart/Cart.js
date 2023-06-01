import {useDispatch, useSelector} from "react-redux";
import s from "./Cart.module.scss"
import closeBtn from "../../img/closeBtn.png"
import deleteProductPic from "../../img/deleteProduct.png"


const Cart = () => {

  const cart = useSelector(state=>state.cart.cart)
  const dipatch = useDispatch()

  const cartClose = () => {
    dipatch({type:"OPEN-CART"})
    
  }

  const countIncrement = (id) => {
    dipatch({type:"COUNT-INCREMENT", id})
  }

  const countDecrement = (id) => {
    dipatch({type:"COUNT-DECREMENT", id})
  }

  const getAmount = (id) =>{
    return  cart.map(el => el.id === id && el.count)
    }
  const deleteProduct = (id) =>{
    dipatch({type:"DELETE-PRODUCT", id})
    }

  return (
    <div className={s.container}>
      <div className={s.main}>
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
                            <button className={s.cartItem_btnMinus} onClick={()=>countDecrement(el.id)}>-</button>
                            <div className={s.cartItem_amount}>{getAmount(el.id)}</div>
                            <button className={s.cartItem_btnPlus} onClick={()=>countIncrement(el.id)}>+</button> 
                        </div>
                        <button className={s.deleteProductBtn}>
                            <img src={deleteProductPic} alt="" className={s.deleteProductPic} onClick={()=>deleteProduct(el.id)}/>
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
      </div>
    </div>
    
  );
}

export default Cart;
