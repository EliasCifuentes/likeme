import { Router } from "express";
import { createPost, deletePost, getAllPost, updatePost } from "../src/controller/postController.js";

const router = Router()

router.get('/posts', getAllPost)
router.post('/posts', createPost)
router.put('/posts/like/:id', updatePost)
router.delete('/posts/:id', deletePost)

export default router