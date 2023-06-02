import s from "./Blog.module.scss"
import BlogItem from "./BlogItem";
import { useDispatch, useSelector } from "react-redux";
import editPost from "../../img/editPost.png"
import AddPostForm from "./AddPostForm";

function Blog() {
  const data = useSelector(state => state.blog.data)
  const isShowForm = useSelector(state => state.blog.showForm)
  const dipatch = useDispatch()

  const showForm =() =>{
    dipatch({type:"SHOW-FORM"})  
  }

  return (
    <div className={s.container}>
      {isShowForm && <div className={s.formContainer}><AddPostForm/></div>}
         <button className={s.addPostBtn} onClick={showForm}>
          <img src={editPost} alt=""/>
          <p>add new post</p>
          </button>
         <div className={s.bloks}>
            {data.map(el => 
            <BlogItem date ={el.date} header ={el.header} text = {el.text} img ={el.img}/>)}
      </div> 
    </div>

  );
}

export default Blog;
