import React from 'react'
import style from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className="list">
        <div className={style.list_item}><img className={style.icon} src = "user.svg" alt="My Happy SVG"/><span>Analytics</span></div>
        <div className={style.list_item}><img className={style.icon} src = "user.svg" alt="My Happy SVG"/><span>Offers</span></div>
        <div className={style.list_item}><img className={style.icon} src = "user.svg" alt="My Happy SVG"/><span>Loyadivty</span></div>
        <div className={style.list_item}><img className={style.icon} src = "user.svg" alt="My Happy SVG"/><span>Currencies</span></div>
        <div className={style.list_item}><img className={style.icon} src = "user.svg" alt="My Happy SVG"/><span>Dispatch</span></div>
        <div className={style.list_item}><img className={style.icon} src = "user.svg" alt="My Happy SVG"/><span>Configurations</span></div>
      </div>
    </div>
  )
}

export default Sidebar