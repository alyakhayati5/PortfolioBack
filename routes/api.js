const express = require("express");
const Formation = require("../models/formation");

const router = express.Router();
//get  a list of formation from the database
router.get("/formations", function(req, res) {
    res.send({ type: "GET" });
});

//add a new formation to the database
router.post("/add", function(req, res) {
    //resultat console
    // console.log(req.body);
    //affichagepostman result
    //res.send({ type: 'POST' });
    // var formation=new Formation(req.body); ninja.save();
    Formation.create(req.body).then(function(formation) {
        res.send(
            formation
            /*{
        
        type: "POST",
        titre: req.body.name,
        dateDebut: req.body.name,
        dateFin: req.body.name,
        ecole: req.body.name,
        lieu: req.body.name,
    }*/
        );
    });
});

//update a  formation in the database
router.put("/update/:id", function(req, res) {
    res.send({ type: "PUT" });
});

//delete  a  formation from the database
router.delete("/delete/:id", function(req, res) {
    res.send({ type: "DELETE" });
});
module.exports = router;