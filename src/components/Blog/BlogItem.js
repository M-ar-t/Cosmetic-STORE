import s from "./Blog.module.scss"

function BlogItem(props) {
  return (
    <div className={s.content}>
        <img className={s.pic} src={props.img} alt=""/>
        <div className={s.date_info}>{props.date}</div>
        <div className={s.header}>{props.header}</div>
        <div className={s.main_text}>{props.text}</div>
        <button className={s.btn}>Read more</button>
    </div>
  );
}

export default BlogItem;
