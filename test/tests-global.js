suite('Global tests', function() {
  test('page should have a valid title', function() {
    assert(document.title &&
      document.title.match(/\S/) &&
      document.title.toUpperCase() !== 'TODO'
    );
  });
});
