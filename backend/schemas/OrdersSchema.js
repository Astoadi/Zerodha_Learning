import mongoose from 'mongoose';
const OrdersSchema=new mongoose.Schema({
    name: {type:String},
    qty:{type:Number},
    price:{type:Number},
    mode:{type:String},
});
export default OrdersSchema;