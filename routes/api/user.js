const userController = require("express").Router();
const db = require('../../models')
userController.route("/")
    .post((req, res) => {
        db.User.create(req.body)
            .then(newUser => res.json(newUser))
            .catch(err => res.status(422).json(err));
    })
    .get((req, res) => {
        db.User.find({ email: req.body.email })
            .then(user => console.log(user))
            .catch(err => res.status(422).json(err));
    })
userController.route("/login")
    .post((req, res) => {
        db.User.findOne({email:req.body.email})
            .then(user =>{
                if(req.body.password === user.password){

                    res.json({email :user.email, id: user._id})
                }else{
                    res.status(401).json('not authorized') 
                }
                
            })
            .catch(err => res.status(401).json('not authorized'));
    })

module.exports = userController