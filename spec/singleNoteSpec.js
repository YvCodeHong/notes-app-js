var note = new Note('Test');
var singlenoteview = new SingleNoteView(note);

function testInstantiation() {
  assert.isTrue(singlenoteview instanceof SingleNoteView);
};

function testTakesNoteParameter() {
  assert.isTrue(singlenoteview.note instanceof Note);
};

function testDisplaysNoteHTML() {
  assert.isTrue(singlenoteview.noteHTML() === "<div>Test</div>")
};

testInstatiation();
testTakesNoteParameter();
testDisplaysNoteHTML();
