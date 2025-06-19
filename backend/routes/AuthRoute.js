import { userVerification } from "../Middlewares/AuthMiddleware.js";
import { Login, Signup } from "../controllers/AuthController.js";
import { Router } from "express";
const router=Router({mergeParams:true});

router.route('/signup').post(Signup);
router.route('/login').post(Login);
router.route('/verify').post(userVerification);

export default router;