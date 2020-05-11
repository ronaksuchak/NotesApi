const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pinned: {
        type: Boolean,
        default: false,
        required: false
    },
    details: {
        type: String,
        required: false
    },

}, { timestamps: true });

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;