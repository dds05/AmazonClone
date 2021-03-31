const functions = require("firebase-functions");
const express=require('express');
const cors=require('cors');


const stripe=require('stripe')('sk_test_51IZwn8SC5Cl7SbPi0ajXWGxgcQ7IZDB3K7KKPnFEDjDAkCUW49igGzXaoRlFNFwqoSUKaAkVAVVKp6RhIJHj33qH00V9gzPdet');

//API

// App config
const app=express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());


//API routes
app.get("/",(request,response)=>response.status(200).send('hello world'));

app.post("/payments/create",async (request,responce)=>{
    const total=request.query.total;
    console.log('payment request received for', total);

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total, //subunits of the currency
        currency:"inr",
    })

     // ok -created
    responce.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

// listen command 
exports.api=functions.https.onRequest(app);






//Example endpoint
//(http://localhost:5001/challenge-96dbb/us-central1/api)