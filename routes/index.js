var express = require('express');
var router = express.Router();
const Submission = require("../model/Submission.js")
const SubmissionAdd = require("../model/SubmissionAdd.js")
const Delete = require("../model/Delete.js")
const Modifys = require("../model/Modifys.js")
const GETDATA_INSERT = require("../model/GetData.js")
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get("/Submission", Submission)
router.get("/SubmissionAdd", SubmissionAdd)
router.get("/delete", Delete)
router.get("/GetData", GETDATA_INSERT)

module.exports = router;