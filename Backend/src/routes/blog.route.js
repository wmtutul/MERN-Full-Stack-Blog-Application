import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { createBlog, deleteBlog, getOwnBlogs, updateBlog } from "../controllers/blog.controller.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router()

router.post('/', isAuthenticated, createBlog);
router.put('/:blogId', isAuthenticated, singleUpload, updateBlog);
router.route("/get-own-blogs").get(isAuthenticated, getOwnBlogs);
router.route("/delete/:id").delete(isAuthenticated, deleteBlog);


export default router;



