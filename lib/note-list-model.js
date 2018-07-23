(function(exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.storeNote = function(note) {
    this.notes.push(note);
  };

  NoteList.prototype.returnNotes = function() {
    return this.notes.map(note => note.text);
  };

  NoteList.prototype.newNote = function(text) {
    this.storeNote(new Note(text));
  }

  exports.NoteList = NoteList;
})(this);
