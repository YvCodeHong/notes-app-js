function testInstantiation() {
  var notelistview = new NoteListView();
  assert.isTrue(notelistview.notelist instanceof NoteList);
};

function testListHTML() {
  var notelistview = new NoteListView();
  notelistview.notelist.newNote('string');
  assert.isTrue(notelistview.listHTML() == "<ul><li><div>string</div></li></ul>");
};

testInstantiation();
testListHTML();
