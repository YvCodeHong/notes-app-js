var note = new Note('Test');
var singlenoteview = new SingleNoteView(note);

function testInstantiation() {
  assert.isTrue(singlenoteview instanceof SingleNoteView);
};

function takesNoteParameter() {
  assert.isTrue(singlenoteview.note instanceof Note);
};

function displaysNoteHTML() {
  assert.isTrue(singlenoteview.noteHTML() === "<div>Test</div>")
};

testInstatiation();
takesNoteParameter();
displaysNoteHTML();
