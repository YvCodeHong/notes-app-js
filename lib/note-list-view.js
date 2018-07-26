(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  };

  NoteListView.prototype.abbreviatedNotes = function() {
    return this.notelist.returnNotes().map(note => note.substring(0,20));
  };

  NoteListView.prototype.listHTML = function() {
    return "<ul><li><div>" + this.abbreviatedNotes().join("</div></li><li><div>") + "</div></li></ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
