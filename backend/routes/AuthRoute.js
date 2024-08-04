import express from 'express';
import * as controller from '../controllers/AuthController.js';

const router = express.Router();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/users", controller.users);

export default router;