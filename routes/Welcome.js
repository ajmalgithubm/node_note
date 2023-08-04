const express = require('express');
const path = require('path')
const router = express.Router();
router.get('/', (req, res) => {
    console.log("Base Root Is called")
    res.render('Welcome')
})

router.get('/home', (req,res) => {
    console.log("Home Page is Called");
    res.send("Home Page")
})

router.get('/profile', (req,res) => {
    console.log("Profile Page is Called");
    res.send("Profile Page")
})

router.get('/about', (req,res) => {
    console.log("About page is  called");
    res.send("about Page")
})
module.exports = router;