// http://stackoverflow.com/questions/21094569/how-to-unit-test-a-filter-in-angularjs
'use strict'; 
describe('The test filter', function () {
  var $filter;

  beforeEach(function () {
    module('Bookmark');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should shorten a long title', function () {
    // Arrange.
    var title = 'hello world';

    // Act.
    var result = $filter('shorttitle')(title, 'shorttitle');

    // Assert.
    expect(result).toEqual('hello wor...');

  });

  it('short title should be the same', function () {
    // Arrange.
    var title = 'hello';

    // Act.
    var result = $filter('shorttitle')(title, 'shorttitle');

    // Assert.
    expect(result).toEqual(title);

  });
});