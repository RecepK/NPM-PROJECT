import express from 'express';
import * as controller from '../controllers/BookController.js';

const router = express.Router();

router.route("/")
    .get(controller.getBooks)
    .post(controller.getBook);

router.route("/create")
    .post(controller.createBook);

export default router;