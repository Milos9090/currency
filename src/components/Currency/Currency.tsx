import React from 'react'
import style from "./Currency.module.css"

const Currency = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <h3 className={style.title} >Currencies</h3>
          <div className={style.search}>
            <img width="30" height="30" src="search.svg" alt="Close" />
            <input type="search" className={style} />
          </div>
        </div>
        <button className={style.add_button}>+ Add Currency</button>
      </div>
      <table className={style.table}>
        <th>Currency Name</th>
        <th>Currency Code</th>
        <th>Currency Symbol</th>
        <tr><td className={style.currency_name}>Euro</td><td className={style.currency_code}>Euro</td><td className={style.currency_symbol}>Euro</td><td><img src="delete.svg" alt="delete" width="30" height="30" /></td></tr>
        <tr><td className={style.currency_name}>Euro</td><td className={style.currency_code}>Euro</td><td className={style.currency_symbol}>Euro</td><td><img src="delete.svg" alt="delete" width="30" height="30" /></td></tr>
        <tr><td className={style.currency_name}>Euro</td><td className={style.currency_code}>Euro</td><td className={style.currency_symbol}>Euro</td><td><img src="delete.svg" alt="delete" width="30" height="30" /></td></tr>
      </table>
    </div>
  )
}

export default Currency