var note = new Note("string");

function testNewNoteIsNote() {
  assert.isTrue(note instanceof Note);
};

function testNoteUponInstantiation() {
  assert.isTrue(note.text === "string");
}

function testReturnsText() {
  assert.isTrue(note.getText() === "string");
}

function testNoteID() {
  assert.isTrue(note.id === 0)
};

testNewNoteIsNote();
testNoteUponInstantiation();
testReturnsText();
testNoteID();
