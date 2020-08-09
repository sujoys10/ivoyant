import React, { useState, useEffect } from 'react';
import { PaymentModalContext } from './PaymentModalContext';

export const GlobalContext = React.createContext();

const GlobalState = ({children}) => {
    const [ config, setConfig ] = useState('');
    const [ invoices, setInvoices ] = useState([]);
    const { setFormType, closeModal } = React.useContext(PaymentModalContext)

    const baseUrl = 'http://localhost:4000';

    const normalizeData = (dataArray) => {
        return dataArray[0].map(item => {
            const vendor = dataArray[1].find(ven => ven.vendorId === item.vendorId);
            return {...item, ...vendor}
        })
    }

    const fetchConfig = async () => {
        try {
            const res = await fetch(baseUrl + '/app/config');
            const data = await res.json();
            console.log(data)
            setConfig(data.tableConfig);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchInvoiceData = async (endPoint) => {
        const urls = [baseUrl+endPoint.call2, baseUrl+endPoint.call3]
          
        const requests = urls.map(url => fetch(url));
        const res = await Promise.all(requests); 
        const dataArray = await Promise.all(res.map(r => r.json()));
        setInvoices(normalizeData(dataArray))
    }


    const makePayment = async (item) => {
        item.amountDue = 0;
        try {
            const updatedInvoice = invoices.map(invoice => {
                if(invoice.invoiceId === item.invoiceId) {
                    return item;
                }
                return invoice;
            }) 

            console.log({updatedInvoice});
            setInvoices(updatedInvoice);

            await fetch(
                baseUrl+ config.dataEndPoints.paymentPost,{
                method: 'POST',
                body: JSON.stringify(item) 
            })

            closeModal();
        } catch (error) {
            console.log(error)
        }   
    }

    const applyCredit = async (item) => {
        item.amountDue = item.amountDue < item.creditBal ? 0 : (item.amountDue - item.creditBal); 
        console.log({item});
        try {
            await fetch(
                baseUrl+ config.dataEndPoints.creditPost,{
                method: 'POST',
                body: JSON.stringify(item) 
            })

            const updatedInvoice = invoices.map(invoice => {
                if(invoice.invoiceId === item.invoiceId) {
                    return item;
                }
                return invoice;
            })
            setInvoices(updatedInvoice);

            if(item.amountDue > 0){
                setFormType('payment');
            }else{
                closeModal();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSort = (field) => {
        const sortedData = invoices.sort((a,b) => a[field] - b[field])
        setInvoices([...sortedData]);
    }


    useEffect(() => {
        fetchConfig();
    },[])

    useEffect(() => {
        if(config){
            fetchInvoiceData(config.dataEndPoints);
        }
    },[config])

    return (
        <GlobalContext.Provider
            value={{
                config,
                invoiceData: invoices,
                handleSort,
                makePayment,
                applyCredit
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;