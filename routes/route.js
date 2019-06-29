const express = require('express');
const router = express.Router();
const Session = require('../models/sessions');
const Earning = require('../models/earning')
const Market = require('../models/agent')
const Seller = require('../models/seller')
const Admin = require('../models/admin')
const Agent = require('../models/agent')
//get all 
router.get('/sessions', function(req, res, next) {
    Session.find(function(err, sessions){
        res.json(sessions);
    });
});
router.get('/sellers', function(req, res, next) {
     Seller.find(function(err, sellers){
         res.json(sellers);
     });
 });
 router.get('/markets', function(req, res, next) {
     Market.find(function(err, markets){
         res.json(markets);
     });
 });
 router.get('/agents', function(req, res, next) {
    Agent.find(function(err, agents){
        res.json(agents);
    });
});
router.get('/earnings', function(req, res, next) {
    Earning.find(function(err, earnings){
        res.json(earnings);
    });
});
//get one
router.get('/onesession/:id', function(req, res, next) {
    // res.send('Liste des sessions de formations');
    Session.findOne({_id: req.params.id},function(err, sessions){
        res.json(sessions);
    });
});
router.get('/oneseller/:id', function(req, res, next) {
    // res.send('Liste des sessions de formations');
    Seller.findOne({_id: req.params.id},function(err, sellers){
        res.json(sellers);
    });
});
//ajouter session
router.post('/session', (req, res, next)=>{
   // res.send('Ajouter une session');
    //create new session from request
    const newSession = new Session(
    {name: req.body.name,
    track:req.body.track,
    date:req.body.date,
    duree: req.body.duree,
    adress: req.body.adress,
    participants: req.body.participants,
    isCompleted: false
	});
console.log(newSession);
    //insert into database
    newSession.save((err)=>{
        if (err)
        {
            res.json({msg: 'Failed to add session'});
        }
        else {
            res.json({msg: 'Session added successfully'});
        }
    });
});

//supprimer session
router.delete('/session/:id', (req, res, next)=>{
    Session.remove({_id: req.params.id}, function(err, result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//modifier une session
router.put('/update/:id', (req, res) => {
    Session.update({_id: req.params.id}, {
            $set: {
                name: req.body.name,
                track: req.body.track,
                date: req.body.date,
                duree: req.body.duree,
                adress: req.body.adress,
                participants: req.body.participants,
                isCompleted: req.body.isCompleted,
            }
        },
        (err, result) => {
            if (err) return res.send(err)
            res.send(result)
        });
});

module.exports = router;

