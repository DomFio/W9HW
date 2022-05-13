const PostDashboardRouter = require("express").Router()

PostDashboardRouter.route("/create")
    .post(require("./create"))

PostDashboardRouter.route("/:id")
    .get(require("./view"))

module.exports = PostDashboardRouter