function testInstatiation() {
  var notelist = new NoteList();
  assert.isTrue(notelist instanceof NoteList);
};

function testNotesArray() {
  var notelist = new NoteList();
  assert.isTrue(Array.isArray(notelist.notes));
};

function testStoreNotesInArray() {
  var note = new Note();
  var notelist = new NoteList();
  notelist.storeNote(note);
  assert.isTrue(notelist.notes.includes(note));
};

function testReturnNotesInArray() {
  var note = new Note();
  var notelist = new NoteList();
  notelist.storeNote(note);
  assert.isTrue(notelist.returnNotes() instanceof Array);
};

function instantiatesNewNote() {
  var notelist = new NoteList();
  notelist.newNote('string');
  assert.isTrue(notelist.returnNotes()[0] === 'string');
};

testInstatiation();
testNotesArray();
testStoreNotesInArray();
testReturnNotesInArray();
instantiatesNewNote();
