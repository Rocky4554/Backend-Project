import {Router} from 'express';
import { logoutUser, refreshAccessToken, userRegister } from '../controllers/register.controller.js';
import { upload } from '../middleware/mutler.js';
import { loginUser } from '../controllers/register.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';

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

    userRouter.route("/login").post(loginUser);
    userRouter.route("/logout").post(verifyJWT,logoutUser);
    userRouter.route("/refresh-token").post(refreshAccessToken);

export {userRouter}

