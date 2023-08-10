import { Router } from 'express';
import { register, login, logout, profile } from '../controllers/auth.controller.js';
import { authRequired } from '../middelwares/validateToken.js';
import { validateSchema } from '../middelwares/validate.auth.js';
import { registerSchema,loginSchema } from '../schemas/auth.schema.js';

const router = Router();

router.post('/register', validateSchema(registerSchema)  ,register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);

export default router;