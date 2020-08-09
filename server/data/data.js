const invoices = [{
    "invoiceId": 1234,
    "vendorId" : "G1",
    "quantity" : 20,
    "product" : "Apple",
    "amountBal"	: 129.92,
    "amountDue" : 25.50,
    "invoiceDate" : 04/01/2020	
},
{
    "invoiceId": 4578,
    "vendorId" : "D1",
    "product" : "Bread",
    "quantity" : 500,
    "amountBal"	: 1024.12,
    "amountDue" : 512.50,
    "invoiceDate" : 03/31/2020	
},
{
    "invoiceId": 9999,
    "vendorId" : "W1",
    "quantity" : 1000,
    "product" : "Napkin",
    "amountBal"	: 15.25,
    "amountDue" : 15.25,
    "invoiceDate" : 03/31/2020	
},
{
    "invoiceId": 1000,
    "vendorId" : "W1",
    "quantity" : 25,
    "product" : "Sanitizer",
    "amountBal"	: 25.00,
    "amountDue" : 12.25,
    "invoiceDate" : 03/31/2020	
},
{
    "invoiceId": 1025,
    "vendorId" : "W1",
    "quantity" : 1000,
    "product" : "Napkin",
    "amountBal"	: 0,
    "amountDue" : 0,
    "invoiceDate" : 03/31/2020	
}];


const vendors = [{
    "vendorId": "D1",
    "vendorName": "Delmonte",
    "creditBal" : 600.0		
},
{
    "vendorId": "T1",
    "vednorName" : "Target"
},
{
    "vendorId": "W1",
    "vendorName" : "Walmart",
    "creditBal" : 12.25
},
{
    "vendorId": "G1",
    "creditBal" : 0.0		
}]

module.exports = {
    invoices,
    vendors 
}