import React from 'react';
import { PaymentModalContext } from '../context/PaymentModalContext';
import { GlobalContext } from '../context/GlobalContext';
import style from '../styles/PaymentForm.module.css';

const PaymentForm  = () => {
    const { item } = React.useContext(PaymentModalContext);
    const { makePayment } = React.useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        makePayment(item);
    }
    return (
        <form className={style.paymentForm} onSubmit={handleSubmit}>
            <p>Amount payble: {item.amountDue}</p>
            <button className={style.paymentBtn} type="submit">Pay</button>
        </form>   
    )
}

export default PaymentForm;