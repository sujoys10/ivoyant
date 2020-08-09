import React, { useState } from 'react';

export const PaymentModalContext = React.createContext();

const PaymentModalState = ({children}) => {
    const [ modal, setModal ] = useState(false);
    const [ type, setType ] = useState('');
    const [ item, setItem ] = useState('');

    const openModal = ({type, item}) => {
        setType(type);
        setModal(true);
        setItem(item);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <PaymentModalContext.Provider
            value={{
                modal,
                formType: type,
                item,
                openModal,
                closeModal,
                setFormType: setType,
            }}
        >
            {children}
        </PaymentModalContext.Provider>
    )
}

export default PaymentModalState;