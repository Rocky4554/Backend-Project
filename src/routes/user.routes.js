import {Router} from 'express';
import { userRegister } from '../controllers/register.controller.js';

const userRouter= Router();

userRouter.route('/register').post(userRegister);

export {userRouter}

