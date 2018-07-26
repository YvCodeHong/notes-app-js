var notelist = new NoteList();
var notecontroller = new NoteController(notelist);

function testInstantiation() {
  assert.isTrue(notecontroller instanceof NoteController);
};

function testAddNote() {
  notecontroller.addNote('Favourite drink: seltzer');
  assert.isTrue(notecontroller.notelist.returnNotes()[0] === 'Favourite drink: seltzer')
}

// Re-write this test with mocking
function testViewNotes() {
  assert.isTrue(notecontroller.viewNotes(notelist) === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
}

testInstantiation();
testAddNote();
// testViewNotes();
