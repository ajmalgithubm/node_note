const express = require("express");
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'Pages',"Welcome.html"))
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'Pages', "Home.html"))
})
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'Pages', "Profile.html"))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'Pages', "About.html"))
})

app.listen(3000, () => {
    console.log("Server is Created..")
 })