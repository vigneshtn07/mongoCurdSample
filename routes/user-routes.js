const express = require('express');
const router = express.Router();
const UserModel = require('../models/user-model');

/**
 * Get All user documents
 */
router.get('', (request, response) => {
    UserModel.find({}, (err, users) => {
        if (err) {
            return response.status(400).send(err);
        } else {
            return response.status(200).send(users);
        }
    });
});

/**
 * Bulk user document insert
 */
router.post('/saveAll', (request, response) => {
    UserModel.insertMany(request.body, (err, users) => {
        if (err) {
            return response.status(400).send(err);
        } else {
            return response.status(200).send("List of users saved successfully");
        }
    });
});

/**
 * Bulk user document insert
 */
router.post('/update', (request, response) => {
    var ObjectId = require('mongodb').ObjectID;
    var UserIds = request.body.map(function (id) {
        return id;
    });
    UserModel.updateMany({_id: {$in: UserIds}}, {$set: {workPlace: 'Avanade'}}, {multi: true}, (err, docs) => {
        if (err) {
            return response.status(400).send(err);
        } else {
            return response.status(200).send({isSuccess: true});
        }
    });
});


/**
 * Get user based on pagination 
 */
router.post('/getUsers/:page', (request, response) => {
    var perPage = request.body.perPage || 10;
    // var workSpaceType = request.body.workSpaceType;
    var page = parseInt(request.params.page) || 1
    // var query = workSpaceType ? {'workPlace': workSpaceType} : {};
    UserModel.find({}).limit(perPage * page).exec((err, users) => {
        UserModel.countDocuments().exec((err, count) => {
            if (err) return next(err);
            var reponse = {users: users, pages: Math.ceil(count / perPage), currentPage: page};
            response.status(200).send(reponse);
        });
    })
});

module.exports = router;