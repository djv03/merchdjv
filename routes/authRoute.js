import express from 'express';
import {registerController,loginController, forgotPassContoller} from '../controllers/authController.js';
import {checkToken} from '../middleware/authMiddleware.js'

// router Object
const router= express.Router();

//your routes goes here

// 1. registering user
router.post('/register',registerController);

//2. login user
router.post('/login',loginController);

//2. Forgot password
router.post('/forgot-password',forgotPassContoller);

//3. protected Routes
router.get('/user-auth',checkToken,(req,res)=>{
    res.status(200).send({ok:true})
})

export default router;
