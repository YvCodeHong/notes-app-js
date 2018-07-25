(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
  };

  NoteController.prototype.addNote = function(text) {
    this.notelist.newNote(text);
  };

  NoteController.prototype.viewNotes = function() {
    var id = document.getElementById('app');
    id.innerHTML = new NoteListView(this.notelist).listHTML();
  };

  exports.NoteController = NoteController;
})(this);
