import s from "./Home.module.scss"
import { NavLink } from "react-router-dom";
import facebook from "../../img/facebook-circle-mono.png"
import pinterest from "../../img/pinterest-circle-mono.png"
import twitter from "../../img/twitter-circle-mono.png"
import instagram from "../../img/instagram-circle-mono.png"
import telegram from "../../img/telegram-circle-mono.png"
import logoImg from "../../img/Bloom Beauty_footer.png"
import call from "../../img/Call.png"
import messaage from "../../img/Message.png"
import location from "../../img/Loc.png"
import arrowRight from "../../img/Arrow - Right.png"
import { useDispatch } from "react-redux";

function FooterPart() {
  const dispatch = useDispatch()

  const accountOpen = () => {
    dispatch({type:"OPEN-ACCOUNT"})
  }

  return ( 
        <div className={s.footer}>
             <div className={s.footer_topPanel}>
                <a href="https://web.telegram.org/a/" target="_ blank"><img className={s.footer_social} src={facebook} alt=""/></a>
                <a href="https://web.telegram.org/a/" target="_ blank"><img className={s.footer_social} src={pinterest} alt=""/></a>
                <a href="https://web.telegram.org/a/" target="_ blank"><img className={s.footer_social} src={twitter} alt=""/></a>
                <a href="https://web.telegram.org/a/" target="_ blank"><img className={s.footer_social} src={instagram} alt=""/></a>
                <a href="https://web.telegram.org/a/" target="_ blank"><img className={s.footer_social} src={telegram} alt=""/></a>
             </div>
             <div className={s.footer_middlePanel}>
                <div className={s.logoBlok}>
                  <a href="/#" ><img className={s.logoBlok_logo} src={logoImg} alt='logo'/></a>
                  <p className={s.logoBlok_text}>Discover nature's beauty with our natural care products.</p>
                  <p className={s.logoBlok_text}><img className={s.logoBlok_img} src={call} alt=""/>+ 38 050 123 45 67</p>
                  <p className={s.logoBlok_text}><img className={s.logoBlok_img} src={messaage} alt=""/>bloombt@kmail.com </p>
                  <p className={s.logoBlok_text}><img className={s.logoBlok_img} src={location} alt=""/>Moskow, Russia</p>
                </div>
                <div className={s.infoBlok}>
                  <div className={s.infoBlok_item}>
                    <p className={s.infoBlok_header}>Help</p>
                    <ul className={s.infoBlok_list}>
                     <NavLink to="/"><li className={s.infoBlok_listItem}>Contact us</li></NavLink>
                     <NavLink to="/"><li className={s.infoBlok_listItem}>FAQ</li></NavLink>
                     <NavLink to="/"><li className={s.infoBlok_listItem}>Shipping & Returns</li></NavLink>
                    </ul>
                  </div>

                  <div className={s.infoBlok_item}>
                    <p className={s.infoBlok_header}>My account</p>
                    <ul className={s.infoBlok_list}>
                    <NavLink to="/"><li className={s.infoBlok_listItem}>Addresses</li></NavLink>
                    <NavLink to="/"><li className={s.infoBlok_listItem}>FAQ</li></NavLink>
                    <NavLink to="/"><li className={s.infoBlok_listItem}>Wishlist</li></NavLink>
                    </ul>
                  </div>
                  <div className={s.infoBlok_item}>
                      <p className={s.infoBlok_header}>Customer care</p>
                      <ul className={s.infoBlok_list}>
                      <NavLink to="/aboutus"><li className={s.infoBlok_listItem}>About us</li></NavLink>
                      <NavLink to="/blog"><li className={s.infoBlok_listItem}>Blog</li></NavLink>
                      </ul>
                  </div>     
                </div>
                <div className={s.signUpBlok}>
                  <p className={s.signUpBlok_header}>SIGN UP FOR EMAILS</p>
                  <p className={s.signUpBlok_text}>Stay informed, subscribe to our newsletter now!</p>
                 <input className={s.signUpBlok_input} placeholder="Email"></input>
                 <p className={s.signUpBlok_link} ><button className={s.signUpBlok_btn} to="/account" onClick={accountOpen}>Subscribe
                 <img className={s.signUpBlok_arrow} src={arrowRight} alt='arrow'/></button></p> 
                </div>
             </div>
          </div>
  );
}

export default FooterPart;
