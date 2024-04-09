const Note = require('../modules/Note');
const { body, validationResult, header } = require('express-validator'); //express-validator for valdiation


//fetchAllNotes
const fetchAllNotes = async (req, res) => {
    const note = await Note.find({ user: req.user.id });
    res.json(note);
}


//addNote
const addNote = async (req, res) => {

    try {
        const error = validationResult(req);

        if (!(error.isEmpty())) {
            res.status(400).json({ error: error.array() });
        }

        const note = new Note({
            user: req.user.id,
            tittle: req.body.tittle,
            discription: req.body.discription,
            tag: req.body.tag
        })

        const savedNote = await note.save();

        res.json(savedNote);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error in saving note");
    }
}


//updateNote
const updateNote = async (req, res) => {

    try {
        const { tittle, discription, tag } = req.body;

        const newNote = {};
        if (tittle) { newNote.tittle = tittle };
        if (discription) { newNote.discription = discription };
        if (tag) { newNote.tag = tag };

        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Note not found") };

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.send(note);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error in saving note");
    }
}


//deleteNote
const deleteNote = async (req, res) => {

    try {
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Note not found") };

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.send("Deleted successfully");
    }
    catch(error){
        console.log(error);
        res.status(500).send("Error in saving note");
    }
}


module.exports = {fetchAllNotes, addNote, updateNote, deleteNote};