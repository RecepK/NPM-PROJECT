import express from 'express';
import * as controller from '../controllers/BaseController.js';

const router = express.Router();

router
    .route("/")
    .get(controller.getReq)
    .post(controller.postReq);

router
    .route("/data")
    .get(controller.getData);

export default router;