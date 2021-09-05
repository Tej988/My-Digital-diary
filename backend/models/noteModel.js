const mongoose = require("mongoose");
const noteSchema = {
    title:String,
    content:String
}
const Note = mongoose.model("Blogdb", noteSchema);
module.exports = Note;