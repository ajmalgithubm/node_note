const express = require('express');
const path = require('path')
const router = express.Router();
const url = 'mongodb://127.0.0.1:27017';
const MongoClient = require('mongodb').MongoClient

router.get('/', (req, res) => {
   res.render('welcome')
})

router.post('/submit', (req, res) => {
    console.log(req.body)
    const email = req.body.emailaddress;
    const password = req.body.password;
    MongoClient.connect(url).then((client) => {
        const db = client.db('project');
        const userCollection = db.collection('user');
        userCollection.insertOne({email,password}).then(() => {
            res.send("added To database");
            client.close()
        })
    })

})


module.exports = router;