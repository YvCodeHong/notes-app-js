(function(exports) {
  function NoteListView() {
    this.notelist = new NoteList();
  };

  NoteListView.prototype.listHTML = function() {
    return "<ul><li><div>" + this.notelist.returnNotes().join("</div></li></ul><ul><li><div>") + "</div></li></ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
