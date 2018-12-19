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
 * Get user based on pagination 
 */
router.post('/getUsers/:page', (request, response) => {
    var perPage = request.body.perPage || 10;
    var page = request.params.page || 1

    UserModel.find({}).limit(perPage).exec((err, users) => {
        console.log(users);
        response.status(200).send(users);
        // UserModel.count().exec((err, count) => {
        //     if (err) return next(err);
        //     var reponse = {users: users, pages: Math.ceil(count / perPage), currentPage: page};
        //     response.status(200).send(reponse);
        // })
    })
});

module.exports = router;