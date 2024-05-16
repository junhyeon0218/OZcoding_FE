const express = require("express");
const postsRouter = express.Router();
const postController = require("../controller/posts.controller");

postsRouter.get("/", postController.getPost);

module.exports = postsRouter;
