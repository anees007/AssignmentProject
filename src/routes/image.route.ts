import { Router } from 'express';
import { uploadImageS3, addComment } from '../controllers/image.controller';
import upload from '../middlewares/upload';
import { validate, ValidationType } from "@src/middlewares/validator";
const router = Router();

router.post("/upload-image", upload, uploadImageS3);
router.post('/:imageId/comments',addComment);  // For adding comments

export default router;
