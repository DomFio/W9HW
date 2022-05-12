const MainDashboardRouter = require("express").Router()

MainDashboardRouter.route("/")
    .get(require("./dashboard.view.js"))

MainDashboardRouter.route("/home")
    .get(require("./posts.view.js"))

module.exports = MainDashboardRouter

