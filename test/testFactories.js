//http://stackoverflow.com/questions/16565531/unit-testing-angularjs-factories-that-have-dependencies
describe('app: myApp', function() {
  beforeEach(module('Bookmark'));
  var $controller;
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));
  // Factory of interest is called MyFactory
  describe('factory: $bookmarkList', function() {
    var factory = null;
    beforeEach(inject(function($bookmarkList) {
      factory = $bookmarkList;
    }))
    it('Should define methods', function() {
      expect(factory).toBeDefined();
      expect(factory.length).toBe(0);
    });
  });
});