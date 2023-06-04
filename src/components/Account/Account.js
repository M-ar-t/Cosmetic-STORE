import s from "./Account.module.scss"
import closeBtn from "../../img/closeBtn.png"
import googleIcon from "../../img/google.png"

function Account() {
  return (
    <div className={s.container}>
      <div className={s.closeBtn} ><img  src={closeBtn} alt=""/></div>
      <div className={s.container_inner}>
          <p className={s.header}>Log In</p>
          <p className={s.enterEmail}>Please enter your e-mail and password:</p>
          <input className={s.input} placeholder="Email"/>
          <input className={s.input} placeholder="Password"/>
          <button className={s.btn}>Log In</button>
          <div className={s.line}><span  className={s.or}>Or</span></div>
          <div className={s.btnContainer}>
              <img className={s.btnContainer_img} src={googleIcon} alt=""/>
              <button className={s.btnContainer_btn}>Continue with Google</button>
          </div>    
          <div className={s.recover}>
              <p className={s.recover_item}>Forgot your password?</p>
              <p className={s.recover_item}>Recover password</p>
          </div> 
          <div className={s.create}>
              <p className={s.create_item}>New to Bloom Beauty?</p>
              <p className={s.create_item}>Create an Account</p>
          </div> 
      </div>
    </div>
  );
}

export default Account;
