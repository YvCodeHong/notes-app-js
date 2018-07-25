var notelist = new NoteList();
var notelistview = new NoteListView(notelist);

function testInstantiation() {
  assert.isTrue(notelistview.notelist instanceof NoteList);
};

function testListHTML() {
  notelistview.notelist.newNote('string');
  assert.isTrue(notelistview.listHTML() == "<ul><li><div>string</div></li></ul>");
};

testInstantiation();
testListHTML();
