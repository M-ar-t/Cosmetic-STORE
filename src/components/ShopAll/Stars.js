import React from 'react';
import s from "./Stars.module.scss"
import fill_star from "../../img/star_fill.png"
import empty_star from "../../img/star_empty.png"

const Stars = ({starsCount,...props}) =>{

return(
    <div>
        <img className={s.starsImg} src = {starsCount >= 1 ? fill_star : empty_star} alt=''/>
        <img className={s.starsImg} src = {starsCount >= 2 ? fill_star : empty_star} alt=''/>
        <img className={s.starsImg} src = {starsCount >= 3 ? fill_star : empty_star} alt=''/>
        <img className={s.starsImg} src = {starsCount >= 4 ? fill_star : empty_star} alt=''/>
        <img className={s.starsImg} src = {starsCount >= 5 ? fill_star : empty_star} alt=''/>
    </div>
   
)

}

export default Stars


