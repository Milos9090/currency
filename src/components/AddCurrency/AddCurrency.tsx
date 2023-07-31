import React from 'react'
import style from "./AddCurrency.module.css"
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../../utils/useLocalStorage'
import { Currencies } from '../Currency/Currency'


const AddCurrency = () => {
  
  const [currencies, setCurrencies] = useLocalStorage<Currencies[]>("CURRENCIES", [])
  
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <Link to="/index">
            <div className={style.close} />
          </Link>
          <div className={style.label}>Add Currency</div>
        </div>
        < div className={style.button_group}>
          <Link to="/index">
            <button className={style.cancel}>Cancel</button>
          </Link>
          <button className={style.add}>Add</button>
        </div>
      </div>
      <div className={style.form}>
        <div className={style.form_unit}>
          <label htmlFor="">Currency name</label>
          <input type="text" />
        </div>
        <div className={style.form_unit}>
          <label htmlFor="">Currency code</label>
          <input type="text" />
        </div>
        <div className={style.form_unit}>
          <label htmlFor="">Currency symbol</label>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default AddCurrency