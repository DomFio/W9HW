const PostDashboardRouter = require("express").Router()

PostDashboardRouter.route("/create")
    .post(require("./create.js"))

PostDashboardRouter.route("/")
    .get(require("./view.js"))

module.exports = PostDashboardRouter