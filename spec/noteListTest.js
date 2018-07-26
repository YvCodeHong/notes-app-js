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

function testInstantiatesNewNote() {
  var notelist = new NoteList();
  notelist.newNote('string');
  assert.isTrue(notelist.returnNotes()[0] === 'string');
};

function testIndividualID() {
  var notelist = new NoteList();
  notelist.newNote();
  notelist.newNote();
  assert.isTrue(notelist.notes[1].id === 1);
};

testInstatiation();
testNotesArray();
testStoreNotesInArray();
testReturnNotesInArray();
testInstantiatesNewNote();
testIndividualID();
