import s from "./Home.module.scss"
import { NavLink } from "react-router-dom";


function HeaderPart() {
  return (
        <div className={s.container}>
              <div className={s.container_info}>
                <h1 data-aos="fade-right" data-aos-duration="1000">Discover your inner beauty with Blossom Glow Kit</h1>
                <p className={s.container_text}>Great gift for yourself and loved ones</p>
                <NavLink to='./shopall' className={s.btn}>Shop now</NavLink>
              </div>
          </div>
  );
}

export default HeaderPart;
