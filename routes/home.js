const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("This Home Original")
})

module.exports = router;