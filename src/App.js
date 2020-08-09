import React from 'react';
import './App.css';
import InvoiceTable from './components/InvoiceTable';
import PaymentModal from './components/PaymentModal';

function App() {
  return (
    <div className="App">
     <InvoiceTable />
     <PaymentModal />
    </div>
  );
}

export default App;
