const express = require("express");
const indexController = require("../controllers/index.controller")
const indexRouter = express.Router();

indexRouter.get("/",indexController.indexController);
indexRouter.get("/users",indexController.usersController);
indexRouter.get("/user",indexController.findUserController);
indexRouter.get("/update",indexController.updateUserController);

module.exports = indexRouter;