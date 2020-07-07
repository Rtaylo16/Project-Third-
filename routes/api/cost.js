const router = require("express").Router();
const db = require('../../models')
//original code

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





//routes
router.get('/:value/:value2' , (req, res) => {

    db.Cost.find({value:req.params.value, value2:req.params.value2})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerortta);
        });

});


// router.post('/save', (req, res) => {

//     const data = req.body;

//     const newCost = new Cost(data);

//     // .save

//     newCost.save((error) => {
//         if (error) {
//             res.status(500).json({ msg: 'Sorry, internal server errors' });
//             return;
//         }
//         res.json({
//             msg: 'Your data has been saved!!!'
//         });

//     });
// });

// router.get('/name', (req, res) => {
//     const data = {
//         username: 'peterson',
//         age: 5
//     };
//     res.json(data);




module.exports = router