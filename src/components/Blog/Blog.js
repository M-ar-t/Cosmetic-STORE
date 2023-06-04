import s from "./Blog.module.scss"
import BlogItem from "./BlogItem";
import { useDispatch, useSelector } from "react-redux";
import editPost from "../../img/editPost.png"
import AddPostForm from "./AddPostForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Blog() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  ScrollToTop()
  
  const data = useSelector(state => state.blog.data)
  const isShowForm = useSelector(state => state.blog.showForm)
  const dispatch = useDispatch()

  const showForm =() =>{
    dispatch({type:"SHOW-FORM"})  
  }

  return (
    <div className={s.container}>
      {isShowForm && <div className={s.formContainer}><AddPostForm/></div>}
         <button className={s.addPostBtn} onClick={showForm}>
          <img src={editPost} alt=""/>
          <p>add new post</p>
          </button>
         <div className={s.bloks}>
          {console.log(data)}
            {data.map((el,index) => 
            <BlogItem key ={index+1} keyEl ={index+1} date ={el.date} header ={el.header} text = {el.text} img ={el.img}/>)}
      </div> 
    </div>

  );
}

export default Blog;
