import { Router } from 'express';
import { authantication, authorizerole } from '../middlewares/auth.js';
import { profileroute } from '../Controller/signup.controller.js';
import { adminroute } from '../Controller/signin.controller.js';
import signincontroller from '../Controller/signin.controller.js';
import { usercontroller } from '../Controller/signup.controller.js';

const router = Router();

router.post('/signup', usercontroller);

router.post('/login', signincontroller);

router.get('/profile', authantication, profileroute);

router.get('/admin', authantication, authorizerole('admin'), adminroute);

export default router;
