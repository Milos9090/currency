import React from 'react'
import style from "./AddCurrency.module.css"

const AddCurrency = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <div className={style.close} />
          <div className={style.label}>Add Currency</div>
       </div>
        < div className={style.button_group}>
          <button className={style.cancel}>Cancel</button>
          <button className={style.add}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddCurrency