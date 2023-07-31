import React from 'react'
import style from "./Currencies.module.css";
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Currency from '../Currency/Currency';
import AddCurrency from '../AddCurrency/AddCurrency';

type PropCurrencies = {
  page: string;
}

const Currencies = (props: PropCurrencies) => {
  return (
    <main className={style.container}>
    <Header />
    <section className={style[props.page !== "index" ? "main" : "main_with"]}>
    <Sidebar />
    <Currency />
    {props.page !== "index" ? <AddCurrency /> : null}
    </section>
    </main>
  )
}

export default Currencies