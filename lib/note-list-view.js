(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  };

  NoteListView.prototype.listHTML = function() {
    return "<ul><li><div>" + this.notelist.returnNotes().join("</div></li><li><div>") + "</div></li></ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
