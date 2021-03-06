const express = require("express")
const routes = express.Router()
const multer = require("../app/middlewares/multer")

const recipes = require("../app/controllers/RecipesController")

const { onlyUsers } = require("../app/middlewares/session")


routes.get("/", onlyUsers, recipes.index)
routes.get("/create",onlyUsers, recipes.create)
routes.get("/:id",onlyUsers, recipes.show)
routes.get("/:id/edit",onlyUsers, recipes.edit)
routes.post("/",onlyUsers, multer.array("photos", 5), recipes.post)
routes.put("/",onlyUsers, multer.array("photos", 5), recipes.put)
routes.delete("/",onlyUsers, recipes.delete)

module.exports = routes;