const express = require("express");
const usersRouter = express.Router();
const usersControlloer = require("../controller/users.controller");

usersRouter.get("/", usersControlloer.getUsers);

usersRouter.get("/:userId", usersControlloer.getUser);

usersRouter.post("/", usersControlloer.postUser);

module.exports = usersRouter;
