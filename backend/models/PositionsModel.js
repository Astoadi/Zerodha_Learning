import PositionsSchema from "../schemas/PositionsSchema.js";
import mongoose from "mongoose";
const PositionsModel=mongoose.model('Position',PositionsSchema);
export default PositionsModel;