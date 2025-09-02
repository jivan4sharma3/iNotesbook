const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
var fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');

// ROUTE 1 :  Get All the notes  using: GET "/api/notes/fetchallnotes". login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server  Error occurred" + error.massage);
    }
});


// ROUTE 2 :  Add new Notes using: POST "/api/notes/addnotes". login required
router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body
        // Check for validation errors here are 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const saveNotes = await note.save()

        res.json(saveNotes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server  Error occurred" + error.massage);
    }
});

module.exports = router;
