const db =require ("../../models");
const passport = require('../../passport')
const router = require("express").Router();

router.post('/signup', (req, res) => {
    console.log('provider signup');

    const  { email } = req.body;
    console.log(req);
    // ADD VALIDATION
    db.Provider.findOne({ email: email }, (err, provider) => {
        if (err) {
            console.log('provider.js post error: ', err)
        } else if (provider) {
            res.json({
                error: `Sorry, already a user with the email: ${email}`
            })
        }
        else {
            const newProvider = new db.Provider(req.body)
            newProvider.save((err, savedProvider) => {
                if (err) return res.json(err)
                res.json(savedProvider)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/provider.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    }
)

router.get('/verify', (req, res, next) => {
    console.log('===== provider!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ provider: req.user })
    } else {
        res.json({ provider: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no provider to log out' })
    }
})

module.exports = router