var notelist = new NoteList();
var notecontroller = new NoteController(notelist);

function testInstantiation() {
  assert.isTrue(notecontroller instanceof NoteController);
};

function addNote() {
  notecontroller.addNote('Favourite drink: seltzer');
  assert.isTrue(notecontroller.notelist.returnNotes()[0] === 'Favourite drink: seltzer')
}

function viewNotes() {
  assert.isTrue(notecontroller.viewNotes(notelist) === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
}

testInstantiation();
addNote();
viewNotes();
