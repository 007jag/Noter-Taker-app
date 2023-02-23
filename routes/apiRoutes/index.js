const router = require('express').Router();
const { createNewNote, updateDb } = require('../../lib/notes');
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };
  createNewNote(newNote, notes);
  res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  updateDb(noteId, notes);
  res.sendStatus(204);
});

module.exports = router;
