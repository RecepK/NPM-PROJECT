import express from 'express';
import * as controller from '../controllers/AuthController.js';

const router = express.Router();

router.post("/register", controller.register);

export default router;