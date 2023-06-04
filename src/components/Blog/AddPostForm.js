import s from "./AddPostForm.module.scss"
import closeBtn from "../../img/closeBtn.png"
import { useDispatch, useSelector } from "react-redux"
import { createRef } from "react"

function AddPostForm() {

    const myDate = createRef()
    const myHeader = createRef()
    const myText = createRef()
    const myImg = createRef()
    
    const dispatch = useDispatch()

    const fildsIsFill = useSelector(state => state.blog.fildsIsFill)

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
        console.log(obj);
        if (obj.date !== "" & obj.header!== "" & obj.text!== "" & obj.img!== "")  {
            dispatch({type:"COMPLETE-FORM", obj})
            dispatch({type:"SHOW-FORM"}) 
        } else{
            dispatch({type:"FILL-ALL-FIELDS"}) 
        }  
      }
    const fillFields = () =>{
        alert("Not all fields are filled in") 
        dispatch({type:"FILL-ALL-FIELDS"})
    }


  return (
    <div className={s.container}>
     {fildsIsFill && fillFields()}
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
