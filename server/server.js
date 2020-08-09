const app = require('express')();
const cors = require('cors');
const { invoices, vendors } = require('./data/data');

app.use(cors());

const call2 = '/invoices';
const call3 = '/vendors';
const columns = [
    {
        "fieldName": "invoiceId",
        "displayName" : "Invoice ID",
        "display" : true,
        "filteringEnabled" : false,
        "sortingEnabled" : true
    },
    {
        "fieldName": "vendorId",
        "displayName" : "Vendor ID",
        "display" : false,
        "filteringEnabled" : false,
        "sortingEnabled" : true
    },
    {
        "fieldName": "product",
        "displayName" : "Product",
        "display" : true,
        "filteringEnabled" : true,
        "sortingEnabled" : true

    },
]

const dataEndPoints = {
    "call2" : '/invoices',
    "call3" : '/vendors',
    "creditPost" : '/credit/apply',
    "paymentPost" : '/payment'
}
//config
app.get('/app/config', (req, res) => {
    const config = {
        tableConfig: {
            paymentEnabled: false, 
            adjustEnabled : true,
            columns,
            dataEndPoints
        }
    }
    res.json(config)
})

//invoice end point
app.get(call2, (req, res) => {
    res.json(invoices);
})

//vendor end point
app.get(call3, (req, res) => {
    res.json(vendors);
})


app.post(dataEndPoints.creditPost, (req, res) => {
    res.send('success')
    res.status(200);
})

app.post(dataEndPoints.paymentPost, (req, res) => {
    res.send('success')
    res.status(200);
})

app.listen(4000, () =>  {
    console.log('server is satrted')
})