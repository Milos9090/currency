import React from 'react'
import style from "./Currencies.module.css";
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Currency from '../Currency/Currency';
import AddCurrency from '../AddCurrency/AddCurrency';

const Currencies = () => {
  return (
    <main className={style.container}>
    <Header />
    <section className={style.main}>
    <Sidebar />
    <Currency />
    <AddCurrency />
    </section>
    </main>
  )
}

export default Currencies