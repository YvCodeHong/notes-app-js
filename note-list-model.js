(function(exports) {
  function noteList() {
    this.notes = []
  };

  noteList.prototype.storeNote = function(note) {
    this.notes.push(note);
  };

  noteList.prototype.returnNotes = function() {
    return this.notes
  };

  noteList.prototype.newNote = function(text) {
    this.storeNote(new Note(text));
  }

  exports.noteList = noteList;
})(this);
