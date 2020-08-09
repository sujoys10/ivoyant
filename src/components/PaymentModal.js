import React, { Fragment } from 'react';
import Modal from './Modal';
import CreditForm from './CreditForm';
import PaymentForm from './PaymentForm';
import { PaymentModalContext } from '../context/PaymentModalContext';
import style from '../styles/PaymentModal.module.css';

const PaymentModal = () => {
    const { modal, formType, closeModal } = React.useContext(PaymentModalContext);

    return (
        <Fragment>
            { modal && (
                <Modal>
                    <div className={style.paymentBox}>
                        <button className={style.closeBtn}onClick={() => closeModal()}>X</button>
                        <h2 className={style.title}>Payment Window</h2>
                        { formType === 'credit' ? <CreditForm /> : <PaymentForm />}
                    </div>
                </Modal>
            )}
        </Fragment>
    )
}

export default PaymentModal;