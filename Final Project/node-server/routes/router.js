import express from 'express';
import { getForm, postForm } from '../controllers/formController.js';

const router = express.Router();

router.get("/", getForm);
router.post("/", postForm);

export default router;