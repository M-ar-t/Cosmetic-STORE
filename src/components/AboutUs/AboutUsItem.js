import s from "./AboutUs.module.scss"

function AboutUsItem(props) {
  return (

      <div className={s.item} data-aos="zoom-in-up" data-aos-duration="1000" >
         {props.even === true ? <div className={s.item_text}>
                <h1 className={s.item_header}>{props.header}</h1>
                <p className={s.item_mainText}>{props.main_text}</p>
        </div> :
        <div className={s.item_picContainer}><img className={s.item_pic} src={props.img} alt=""/></div>
        }  
        {props.even === true ?  <div className={s.item_picContainer}><img className={s.item_pic} src={props.img} alt=""/></div>
        : <div className={s.item_text}>
        <h1 className={s.item_header}>{props.header}</h1>
        <p className={s.item_mainText}>{props.main_text}</p>
        </div>
}
      </div>

  );
}

export default AboutUsItem;
