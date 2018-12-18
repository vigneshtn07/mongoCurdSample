const express = require('express');
const router = express.Router();
const UserModel = require('../models/user-model');

router.get('', (request, response) => {
    UserModel.find({}, (err, users) => {
        if (err) {
            return response.status(400).send(err);
        } else {
            return response.status(200).send(users);
        }
    });
});

router.post('/saveAll', (request, response) => {
    UserModel.insertMany(request.body, (err, users) => {
        if (err) {
            return response.status(400).send(err);
        } else {
            return response.status(200).send("List of users saved successfully");
        }
    });
});

module.exports = router;