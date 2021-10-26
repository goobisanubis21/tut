const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/")
    .post(userController.save)
    // .get(userController.findAll)

module.exports = router;