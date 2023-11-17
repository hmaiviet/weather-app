/* eslint-disable no-undef */
var express = require('express');
var router = express.Router();
var axios = require('axios');

const prepareQuery = (queryObject) => {
    const entries = Object.entries(queryObject || {});

    if (!entries.length) {
        return "";
    }

    return (
        "&" +
        entries
            .filter(([, value]) => value !== undefined)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")
    );
}

/* GET home page. */
router.get('/', function (req, res, next) {
    const queryAsString = prepareQuery(req.query);
    axios.get(`${process.env.API_BASE_ROUTE}current?access_key=${process.env.API_KEY}${queryAsString}`)
        .then(result => {
            res.send(result.data);
        })
        .catch(err => {
            console.log(err);
            next(err);
        })
});

module.exports = router;
