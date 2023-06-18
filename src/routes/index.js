const {Router} = require('express');
const router = Router(); 

const User = require('../models/User');

router.get('/', (req, res) => res.send('Hello World'))

router.post('/signup', (req, res) => {
    const {email, password } = req.body;
    console.log(email, password)
    res.send('Testing signup');
})

module.exports = router;