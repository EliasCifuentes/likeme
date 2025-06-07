import { Router } from "express";
import { createPost, getAllPost } from "../src/controller/postController.js";

const router = Router()

router.get('/posts', getAllPost)
router.post('/posts', createPost)

export default router