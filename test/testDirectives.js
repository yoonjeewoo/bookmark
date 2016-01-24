// http://www.sitepoint.com/angular-testing-tips-testing-directives/
describe('The test directives', function () {
  'use strict'; 
  var compile, scope, directiveElem;

  beforeEach(function(){
    module('Bookmark');
    inject(function($compile, $rootScope){
      compile = $compile;
      scope = $rootScope.$new();
    });
  });


  it('should shorten a long title', function () {
    // Arrange.
    var url = 'http://www';
    scope.u = {url:url};
   
    // Act.
    var element = compile("<url-link></url-link>")(scope);
    scope.$digest();

    // Assert.
    expect(element.html()).toContain('<a href="' + url);
  });
});