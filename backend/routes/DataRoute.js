import express from 'express';
import * as controller from '../controllers/DataController.js';

const router = express.Router();

router.get("/data", controller.getAllData);

export default router;