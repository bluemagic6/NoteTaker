const fs = require("fs");
const path = require('path');
const router = require('express').Router();

const uuid = require('uuid');


router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
});

// Add new Note
router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync("../db/db.json"));

    const newNotes = req.body

    newNotes.id = uuid.v4();
    notes.push(newNotes);

    fs.writeFileSync('../db/db.json', JSON.stringify(notes));

    res.json(notes);
});

module.exports= router