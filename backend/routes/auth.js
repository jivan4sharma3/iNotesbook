const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "yourSecretKey";


// ROUTE 1 :  Create a User using: POST "/api/auth/createuser". NO login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // Check for validation errors here are 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check if user already exists and return Bad request and the errors
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)
        // Create new user (simple way, plain password)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });


        // Generate JWT token
        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);

        // Send response 
        res.json(authToken)

        // Catch the errors and show errors
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred" + error.massage);
    }
});




// ROUTE : 2  Authenticate a User using: POST "/api/auth/login". NO login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()

], async (req, res) => {
    // Check for validation errors here  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Get email and password form user to login
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status().json({ errors: "Please try to login with correct credentials ." })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status().json({ errors: "Please try to login with correct credentials ." })
        }


        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json(authToken)


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server  Error occurred" + error.massage);
    }
})


// ROUTE 3 :  Get login User details using: POST "/api/auth/getuser". NO login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error occurred: " + error.message);
    }
});


module.exports = router;
