import React from 'react'
import style from "./Currency.module.css"
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../../utils/useLocalStorage';

export type Currencies = {
  currency_name: string;
  currency_code: string;
  currency_symbol: string;
}

const Currency = () => {

  const [currencies, setCurrencies] = useLocalStorage<Currencies[]>("CURRENCIES", [])
  
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <h3 className={style.title} >Currencies</h3>
          <div className={style.search}>
            <img width="30" height="30" src="search.svg" alt="Close" />
            <input type="search" />
          </div>
        </div>
        <Link to="/add">
          <button className={style.add_button}>+ Add Currency</button>
        </Link>
      </div>
      <h2></h2>
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