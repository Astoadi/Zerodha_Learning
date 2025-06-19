import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import authRoute from './routes/AuthRoute.js';
import cookieParser from 'cookie-parser';

const app=express();

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001'
];

app.use(cors({
    origin: (origin,callback)=>{
        if(!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }else{
            callback(new Error('CORS policy does not allow this origin'));
        }      
    },
    credentials: true  
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

import HoldingsModel from './models/HoldingsModel.js';
import PositionsModel from './models/PositionsModel.js';
import OrdersModel from './models/OrdersModels.js';

const PORT=process.env.PORT || 8080 ;
const url=process.env.MONGO_URL;

app.use('/users',authRoute);

app.get('/allHoldings',async(req,res)=>{
    let allHoldings=await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions',async(req,res)=>{
    let allPositions=await PositionsModel.find({});
    res.json(allPositions);
});

app.get('/orders',async(req,res)=>{
    let allOrders=await OrdersModel.find({});
    res.json(allOrders);
})

app.post('/newOrder',async(req,res)=>{
    let newOrder=new OrdersModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,
    });
    await newOrder.save();
    res.json({message:"done"});
});

app.listen(PORT,()=>{
    console.log(`Server started at port${PORT}`);
    mongoose.connect(url).then(()=>console.log('mongoDB is connected successfully'))
    .catch(err=>console.error(err));
});