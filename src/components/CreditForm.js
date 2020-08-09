import React from 'react';
import { PaymentModalContext } from '../context/PaymentModalContext';
import { GlobalContext } from '../context/GlobalContext';
import style from '../styles/CreditForm.module.css';

const CreditForm  = () => {
    const { item, setFormType } = React.useContext(PaymentModalContext);
    const { applyCredit } = React.useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        applyCredit(item);
    }

    const routeToPaymentForm = () => {
        setFormType('payment');
    }

    return (
        <form className={style.creditForm} onSubmit={handleSubmit}>
            <p>Amount Due: {item.amountDue}</p>
            <p className={style.credit}>Availble Vendor Credit: {item.creditBal}</p>
            <button className={style.creditBtn} type="submit">Apply Credit</button>
            <button className={style.paymentBtn} onClick={routeToPaymentForm}>Proceed to payment Page</button>
        </form>
    )
}

export default CreditForm;