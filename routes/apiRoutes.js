const fs = require("fs");
const path = require('path');
const express = require('express');
const router = require("./htmlRoutes");
const app = express();


router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./db/db.json"));
});

// Add new Note
router.post('./api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(".db/db.json"));

    const newNotes = req.body

    newNotes.id = uuid.v4();
    notes.push(newNotes);

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));

    res.json(notes);
});