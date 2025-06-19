import OrdersSchema from "../schemas/OrdersSchema.js";
import mongoose from "mongoose";
const OrdersModel=mongoose.model('Order',OrdersSchema);
export default OrdersModel;