import React from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { PaymentModalContext } from '../context/PaymentModalContext';
import style from '../styles/InvoiceTable.module.css';

const InvoiceTable = () => {
    const { config, invoiceData, handleSort } = React.useContext(GlobalContext);
    const { openModal } = React.useContext(PaymentModalContext);

    const handlePayment = (item) => {
        openModal({
            type: config.adjustEnabled && 'credit',
            item
        });
    }
    
    return (
        <div className={style.invoiceTableBox}>
            {console.log(config)}
            <table className={style.invoiceTable}>
                <thead>
                    <tr>
                        { config && config.columns.length !== 0 && 
                            config.columns.map((column,i) => (
                                column.display && 
                                    <th key={i}>
                                        {column.displayName}
                                        { column.sortingEnabled && 
                                            <button className={style.sortBtn} onClick={() => handleSort(column.fieldName)}>sort</button>
                                        }
                                    </th>
                            ))
                        }
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    { config && invoiceData && invoiceData.length !== 0 &&
                        invoiceData.map((item,i) => (
                            <tr key={item.invoiceId}>
                                { config.columns.map((column,j) => (
                                    column.display && 
                                        <td key={column.fieldName + item.invoiceId}>
                                            {item[column.fieldName]}
                                        </td>
                                ))}
                                <td>
                                    <button
                                        disabled={item.amountDue <= 0} 
                                        onClick={() => handlePayment(item)}
                                    >
                                        Pay
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>   
            </table>
        </div>
    )
}

export default InvoiceTable;