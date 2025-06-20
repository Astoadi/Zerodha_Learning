import UserModel from "../models/UserModel.js";
import { createSecretToken } from "../util/SecretToken.js";
import bcrypt from 'bcrypt';

const Signup=async (req,res,next)=>{
    try{
        const { email, password, username, createdAt } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await UserModel.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
          //withCredentials: true,
          secure: true,  
          sameSite: "None", 
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });
        res.status(201).json({ message: "User signed in successfully", success: true, user });
        //next();
    }catch(error){
        console.error(error);
    }
};

const Login=async(req,res,next)=>{
    try {
        const { email, password } = req.body;
        if(!email || !password ){
          return res.json({message:'All fields are required'})
        }
        const user = await UserModel.findOne({ email });
        if(!user){
          return res.json({message:'Incorrect password or email' }) 
        }
        const auth = await bcrypt.compare(password,user.password)
        if (!auth) {
          return res.json({message:'Incorrect password or email' }) 
        }
         const token = createSecretToken(user._id);
         res.cookie("token", token, {
         // withCredentials: true,
          httpOnly: true,
          secure: true,
          sameSite: "None",
          maxAge: 24 * 60 * 60 * 1000
         });
         res.status(201).json({ message: "User logged in successfully", success: true });
         //next()
      } catch (error) {
        console.error(error);
      }
}
const Logout=async (req,res)=>{
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None"
  });
  res.status(200).json({ message: "Logged out successfully" });
}

export {Signup , Login,Logout};