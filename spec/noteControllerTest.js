function testInstantiation() {
  var notecontroller = new NoteController();
  assert.isTrue(notecontroller instanceof NoteController);
};

testInstantiation();

// A note controller can be instantiated
// innterHTML property of app element contains html similar to other (need mocking for this)
