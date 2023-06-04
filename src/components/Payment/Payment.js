import s from "./Payment.module.scss"
import mastercard from "../../img/master-card.png"
import visa from "../../img/visa.png"
import googlePay from "../../img/google-pay.png"
import payPal from "../../img/PayPal.png"
import { useState } from "react"
import deleteProductPic from "../../img/deleteProduct.png"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

function Payment() {
    const cart = useSelector(state=>state.cart.cart)
    const totalSum = useSelector(state=>state.cart.totalSum)
    const shippingSum =500

    const dispatch = useDispatch()

    const [input1, setInput1]=useState(true)
    const [input2, setInput2]=useState(true)
    const [input3, setInput3]=useState(true)

    const countIncrement = (id,price) => {
        dispatch({type:"COUNT-INCREMENT", id})
        dispatch({type:"TOTAL-SUM", payload:price})
      }
    
      const countDecrement = (id,price) => {
        dispatch({type:"TOTAL-SUM-DEC", payload:{price,id}})
        dispatch({type:"COUNT-DECREMENT", id})
      }
      const getAmount = (id) =>{
        return  cart.map(el => el.id === id && el.count)
        }
      const deleteProduct = (id, count, price) =>{
        const priceReady = count * Number(price.replace(' ',''))
        dispatch({type:"TOTAL-SUM-DEC-ALL", payload:{priceReady, id}})
        dispatch({type:"DELETE-PRODUCT", id})
        }
    

    return (
      <div className={s.container}>     
            <div  className={s.contactInfo}>
                <div className={s.inputBlok}>
                    <div className={s.inputBlok_item}>
                        <p className={s.inputBlok_name}>Contact</p>
                        <input disabled ={input1} className={s.inputBlok_input} placeholder="MariannaThompson93@gmail.com"/>
                        <button className={s.inputBlok_change} onClick={()=>setInput1(!input1)}>Change</button>
                    </div>
                    <div className={s.inputBlok_item}>
                        <p className={s.inputBlok_name}>Ship to</p>
                        <input disabled ={input2} className={s.inputBlok_input} placeholder="Sadivaya 3a, Belgorod, 01000, Russia"/>
                        <button className={s.inputBlok_change} onClick={()=>setInput2(!input2)}>Change</button>
                    </div>
                    <div className={s.inputBlok_item}>
                        <p className={s.inputBlok_name}>Metod</p>
                        <input disabled ={input3} className={s.inputBlok_input} placeholder="Fast Shipping, $5.00"/>
                        <button className={s.inputBlok_change} onClick={()=>setInput3(!input3)}>Change</button>
                    </div>
                </div>
                <div className={s.paymentBlok}>
                    <p className={s.paymentBlok_header}>Payment</p>
                    <div className={s.checkPayBlok}>
                        <div className={s.checkPayBlok_item}>
                            <input className={s.checkPayBlok_radioInput} type="radio" id="creditCard" name="pay" value="creditCard" />
                            <label for="creditCard">Credit card
                                <img className={s.checkPayBlok_img} src={mastercard} alt=""/>
                                <img className={s.checkPayBlok_img} src={visa} alt=""/> 
                            </label>
                        </div>
                        <div className={s.checkPayBlok_item}>
                            <input className={s.checkPayBlok_radioInput} type="radio" id="googlePay" name="pay" value="googlePay" />
                            <label  for="googlePay"><img className={s.checkPayBlok_img} src={googlePay} alt=""/></label>
                        </div>
                        <div className={s.checkPayBlok_item}>
                            <input className={s.checkPayBlok_radioInput} type="radio" id="payPal" name="pay" value="payPal"/>
                            <label for="payPal"><img className={s.checkPayBlok_img}  src={payPal} alt=""/></label>
                        </div>
                    </div>


                </div>
                <div className={s.cardInfoBlok}>
                    <input className={s.cardInfoBlok_input} placeholder="Card number"/>
                    <input className={s.cardInfoBlok_input} placeholder="Card name"/>
                    <div className={s.cardInfoBlok_inputInRow}>
                        <input className={s.cardInfoBlok_date} placeholder="Expiration date (MM/YY)"/>
                        <input className={s.cardInfoBlok_code} placeholder="Security code" />
                    </div>
                    <div className={s.cardInfoBlok_btns}>
                        <button className={s.cardInfoBlok_btnLeftItem} onClick={()=>alert("Pay sucsess!")}>Pay now</button>
                        <NavLink to ="/shopall" className={s.cardInfoBlok_btnRightItem}>Return to Shopping</NavLink>
                    </div>
                    
                </div>
            </div>

            <div  className={s.order}>        
                <div className={s.header}>You order</div>
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
                                            <img src={deleteProductPic} alt="" className={s.deleteProductPic}
                                            onClick={()=>deleteProduct(el.id,el.count, el.price)}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={s.line}></div>
                            </div>
                            )
                        })}
                </div>

                <div className={s.subtotalBlok}>
                    <div className={s.subtotal}>
                            <div className={s.subtotal_text}>Subtotal</div>
                            <div className={s.subtotal_price}>{totalSum} ₽</div>
                        </div>
                        <div className={s.shipping}>
                            <div className={s.subtotal_text}>Shipping</div>
                            <div className={s.subtotal_price}>{shippingSum} ₽</div>
                        </div>
                        <div className={s.shipping}>
                            <div className={s.subtotal_textAll}>Estimated total</div>
                            <div className={s.subtotal_priceAll}>{totalSum+shippingSum} ₽</div>
                        </div>
                </div>

      </div>
      </div>
    );
  }
  
  export default Payment;
  