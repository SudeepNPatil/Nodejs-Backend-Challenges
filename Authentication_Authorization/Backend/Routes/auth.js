import { Router } from 'express';
import user from '../models/user.model.js';

const router = Router();

router.post('/signup', signupcontroller);

router.post('/login', signincontroller);
