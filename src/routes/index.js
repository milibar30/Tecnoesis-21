const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
const hacksRoutes = require('./hacks')
const contactFormRoute = require('./contactForm');

router.get('/', (req, res) => {
    res.render('welcome')
})

router.get('/hacks', (req, res) => {
    res.sendFile(path.join(__dirname+'../../../views/hacks.html'));
});

router.use('/user', userRoutes)
router.use('/hacks', hacksRoutes)
router.use('/hacks/contactForm',contactFormRoute);

module.exports = router
