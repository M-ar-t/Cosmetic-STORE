import s from "./AddPostForm.module.scss"
import closeBtn from "../../img/closeBtn.png"
import { useDispatch } from "react-redux"
import { createRef } from "react"

function AddPostForm() {
    const myDate = createRef()
    const myHeader = createRef()
    const myText = createRef()
    const myImg = createRef()
    const dispatch = useDispatch()

    const showForm =() =>{
        dispatch({type:"SHOW-FORM"})  
      }
    const addInfo =() =>{
      const obj = {
            date: myDate.current.value,
            header: myHeader.current.value,
            text: myText.current.value,
            img: myImg.current.value
        }
        dispatch({type:"COMPLETE-FORM", obj})  
        dispatch({type:"SHOW-FORM"})  
      }

  return (
    <div className={s.container}>
    <div className={s.closeBtn} onClick={showForm}><img  src={closeBtn} alt=""/></div>
      <input ref = {myDate} type="date"/>
      <input ref = {myHeader} placeholder="Enter blog header"/>
      <textarea ref = {myText} placeholder="Enter blog text"/>
      <input ref = {myImg} placeholder="Enter image link"/>
      <button className={s.add} onClick={addInfo}>Add Post</button>
    </div>
  );
}

export default AddPostForm;
