import { userVerification } from "../Middlewares/AuthMiddleware.js";
import { Login, Logout, Signup } from "../controllers/AuthController.js";
import { Router } from "express";
const router=Router({mergeParams:true});

router.route('/signup').post(Signup);
router.route('/login').post(Login);
router.route('/verify').post(userVerification);
router.route('/logout').get(Logout);

export default router;