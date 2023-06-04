import s from "./Home.module.scss"
import { NavLink } from "react-router-dom";
import middlePart_pic_1 from "../../img/inst shots.png"
import middlePart_pic_2 from "../../img/inst shots (1).png"
import middlePart_pic_3 from "../../img/inst shots (2).png"
import middlePart_pic_4 from "../../img/inst shots (3).png"
import middlePart_pic_5 from "../../img/inst shots (4).png"
import middlePart_pic_6 from "../../img/inst shots (5).png"
import middlePart_pic_7 from "../../img/inst shots (6).png"
import middlePart_pic_8 from "../../img/inst shots (7).png"

function MiddlePart() {
  return (
        <div className={s.middlePart}>
              <p className={s.middlePart_text}>
              Share  how you blossomed with <span className={s.tag}>#bloombeauty</span>
              </p>
              <div data-aos="fade-up" data-aos-duration="1000" className={s.middlePart_pics}>
               <div className={s.middlePart_picItem}><img src={middlePart_pic_1} alt=""/></div>
                <div className={s.middlePart_picItem}><img src={middlePart_pic_2} alt=""/></div>
                <div className={s.middlePart_picItem}><img src={middlePart_pic_3} alt=""/></div>
                <div className={s.middlePart_picItem}><img src={middlePart_pic_4} alt=""/></div>
                <div className={s.middlePart_picItem}><img src={middlePart_pic_5} alt=""/></div>
                <div className={s.middlePart_picItem}><img src={middlePart_pic_6} alt=""/></div>
                <div className={s.middlePart_picItem}><img src={middlePart_pic_7} alt=""/></div>
                <div className={s.middlePart_picItem}><img src={middlePart_pic_8} alt=""/></div>
              </div>
              <NavLink to='./aboutus' className={`${s.btn} ${s.btn_center}`}>About us</NavLink>
          </div>
  );
}

export default MiddlePart;
