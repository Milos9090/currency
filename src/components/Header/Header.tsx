import React from 'react'
import style from "./Header.module.css"
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.details}>
        <div className={style.img} ></div>
        <div className={style.text}>
          <div className={style.brand}>BRAND NAME</div>
          <div className={style.store}>All stores</div>
        </div>
      </div>
      <div className={style.icons}>
        <img className={style.icon_alert} src ="bell.svg" alt="alert"/>
        <img className={style.icon_account} src ="user.svg" alt="account"/>
      </div>
    </div>
  )
}

export default Header