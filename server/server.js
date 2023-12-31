const express=require ("express")
const app=express()
const cors=require("cors");
const stripe=require("stripe")("sk_test_51NiikhSFdW4VpEpodquSw4jJUoAeEtf8AEq78QiMfF3xc1KyHq8P2SmtdLuMkaFoy9Numje84aVATkrXRTPtSIK400vz7gO2ug")



app.use (express.json())
app.use(cors());

app.post('/api/create-checkout-session',async(req,res)=>{
    const {products}=req.body;
    


    const lineItems=products.map((products)=>({
        price_data:{
            currency:"inr",
            product_data: {
             name:products.dish
            },
            unit_amount:products.price*100,
        },
        quantity:products.qnty
    }))
    const session =await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:lineItems ,
    mode:"payment",
    success_url:"http://localhost:3000/success",
    cancel_url:"http://localhost:3000/cancel",
})

res.json({id:session.id})
})
app.listen(7000,()=>{
    console.log("server start")
})