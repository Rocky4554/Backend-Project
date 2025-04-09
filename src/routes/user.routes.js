import {Router} from 'express';
import { userRegister } from '../controllers/register.controller.js';
import { upload } from '../middleware/mutler.js';

const userRouter= Router();

userRouter.route("/register").post(
    upload.fields([ // this is a middleware which is used to upload files
        // upload.single("avatar"), // this is used to upload single file
        
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    userRegister
    );

export {userRouter}

