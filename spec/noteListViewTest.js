var notelist = new NoteList();
var notelistview = new NoteListView(notelist);

function testInstantiation() {
  assert.isTrue(notelistview.notelist instanceof NoteList);
};

function testAbbreviatedNotes() {
  notelistview.notelist.newNote('Hello this is a test note.');
  assert.isTrue(notelistview.abbreviatedNotes()[0] === 'Hello this is a test')
};

function testListHTML() {
  assert.isTrue(notelistview.listHTML() == "<ul><li><div>Hello this is a test</div></li></ul>");
};

testInstantiation();
testAbbreviatedNotes();
testListHTML();
