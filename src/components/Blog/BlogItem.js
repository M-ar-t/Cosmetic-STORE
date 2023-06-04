import { useDispatch, useSelector } from "react-redux";
import s from "./Blog.module.scss"
import BlgReadMore from "./BlgReadMore";
import picUndef from "../../img/PicUndef.jpg"


function BlogItem(props) {
  const showAllBlog = useSelector(state => state.blog.showAllBlog)
  const blogId = useSelector(state => state.blog.blogReadMoreId)
  const dispatch = useDispatch()

  const showAllBlogText =() =>{
    dispatch({type:"SHOW-ALL-BLOG"})  
  }
  const blogReadMoreId =(id) =>{
    dispatch({type:"BLOG_ID",id})  
  }

  return (
    <div className={s.content}>
      {showAllBlog  && <BlgReadMore id ={blogId}/>}
        <img className={s.pic} src={props.img ? props.img  : picUndef}  onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src=picUndef;
  }} 
  alt=""/>
        <div className={s.date_info}>{props.date}</div>
        <div className={s.header}>{props.header}</div>
        <div className={s.main_text}>{props.text.substring(0,80)+"..."}</div>
        <button key ={props.id} className={s.btn} onClick={()=>{
            blogReadMoreId(props.keyEl)
            showAllBlogText()
        }
          
          }>Read more</button>
    </div>
  );
}

export default BlogItem;
