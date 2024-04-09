const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router = express.Router();
const Note = require('../modules/Note');
const { body, validationResult, header } = require('express-validator'); //express-validator for valdiation
const {fetchAllNotes, addNote, updateNote, deleteNote} = require('../controllers/notes');


// Route1: fetch all notes of a particular user
router.get('/fetchallnotes', fetchUser, fetchAllNotes);


// Route2: create a new note
router.post('/addnote', fetchUser, [

    body('tittle', "Enter a tittle").isLength({ min: 3 }),
    body('discription', "Enter discription").isLength({ min: 3})

], addNote);


//Route3: Update a existing note
router.put('/updatenote/:id', fetchUser, updateNote);


//Route4: Delete a note
router.delete('/deletenote/:id', fetchUser, deleteNote);


module.exports = router;