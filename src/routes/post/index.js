const PostDashboardRouter = require("express").Router()

PostDashboardRouter.route("/create")
    .get(require("./editor.js"))
    .post(require("./create.js"))

PostDashboardRouter.route("/success")
    .get(require("./created.js"))

PostDashboardRouter.route("/")
    .get(require("./view.js"))

PostDashboardRouter.route("/submit")
    .post(require("./submit.js"))

PostDashboardRouter.route("/results/:id")
    .get(require("./results.js"))

module.exports = QuizDashboardRouter