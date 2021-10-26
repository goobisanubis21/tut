const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        db.TutorUser
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(json(err)))
    },

    save: function (req, res) {
        db.TutorUser
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },
}