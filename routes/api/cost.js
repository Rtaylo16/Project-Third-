const router = require("express").Router();
const Cost = require('../../models')
router.route("/")
    .post((req, res) => {
        db.Cost.create(req.body)
            .then(newCity => res.json(newCity))
            .catch(err => res.status(422).json(err));
    })
    .get((req, res) => {
        db.Cost.find({})
            .then(allCities => res.json(allCities))
            .catch(err => res.status(422).json(err));
    })

module.exports = router