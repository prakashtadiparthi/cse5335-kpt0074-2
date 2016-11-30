var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/prakash';
//mongoose.connect('mongodb://localhost/prakash', function(err){
mongoose.connect('mongodb://prakash:prakash@ds113678.mlab.com:13678/heroku_hbcmd86c', function(err){

    if(!err){
        console.log('connected to mongoDB');


    } else{
        throw err;
    }
});

router.get('/',function (req,res) {
            res.render('index',{});

        });


module.exports = router;

router.get('/getData/:id',function (req,res) {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            return console.dir(err);
        }
        db.collection('things', function(err, collection) {

             var x = parseInt(req.params.id);
            collection.findOne({id:x}, function(err, item) {
                console.log(item)
                res.send(item);
            });
        });

    });

});

