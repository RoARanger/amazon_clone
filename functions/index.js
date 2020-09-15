const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQBpsAR42feFYnmitRDFZFKeIAvFZoXF4IXWUBXV6amx2V3QVdYcJjVb2scqBF504p1Xey8FLRgyGYKtZU4pJpd00vylB5ApD');

// API
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved for amount: ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });
    
      // 200=Good 201=OK - Created
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-73b8c/us-central1/api