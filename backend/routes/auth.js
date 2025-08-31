const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "yourSecretKey";


// Create a User using: POST "/api/auth/createuser". NO login required
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
        const secPass = await bcrypt.hash(req.body.password,salt) 
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

module.exports = router;
