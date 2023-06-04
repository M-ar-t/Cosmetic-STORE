import s from "./BlgReadMore.module.scss"
import closeBtn from "../../img/closeBtn.png"
import { useDispatch, useSelector } from "react-redux"
import picUndef from "../../img/PicUndef.jpg"

function BlgReadMore(props) {
    const dispatch = useDispatch()
    const blogInfo = useSelector(state => state.blog.data.filter(el =>el.id===props.id)[0])

    const hideBlog =() =>{
        dispatch({type:"SHOW-ALL-BLOG"})  
      }
      console.log(blogInfo);
  return (
    <div className={s.container}>
        <div className={s.closeBtn} onClick={hideBlog}><img  src={closeBtn} alt=""/></div>
        <img className={s.pic} src={blogInfo.img } onError={({ currentTarget }) => {
    currentTarget.onerror = null
    currentTarget.src=picUndef
  }}
    alt=""/>
        <div className={s.date}>{blogInfo.date}</div>
        <div className={s.header}>{blogInfo.header}</div>
        <div className={s.text}>{blogInfo.text}</div>      
    </div>
  );
}

export default BlgReadMore;
