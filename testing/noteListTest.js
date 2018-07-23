
function testInstatiation() {
  var noteListInstance = new noteList()
  assert.isTrue(noteListInstance instanceof noteList)
};

function testNotesArray() {
  var noteListInstance = new noteList()
  assert.isTrue(Array.isArray(noteListInstance.notes))
};

function testStoreNotesInArray() {
  var note = new Note();
  var notelist = new noteList();
  notelist.storeNote(note);
  assert.isTrue(notelist.notes.includes(note))
};

function testReturnNotesInArray() {
  var note = new Note()
  var notelist = new noteList()
  notelist.storeNote(note)
  assert.isTrue(notelist.returnNotes() === notelist.notes)
};

function instantiatesNewNote() {
  var notelist = new noteList()
  notelist.newNote('string');
  assert.isTrue(notelist.returnNotes()[0].text === 'string')
};

testNotesArray()
testStoreNotesInArray()
testReturnNotesInArray()
instantiatesNewNote()
