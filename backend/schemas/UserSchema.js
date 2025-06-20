import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Your email address is reuired'],
        unique:true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
      },
      password: {
        type: String,
        required: [true, "Your password is required"],
      },
      createdAt: {
        type: Date,
        default: new Date(),
      },
});
UserSchema.pre('save',async function(){
    this.password=await bcrypt.hash(this.password,12);
});
export default UserSchema;