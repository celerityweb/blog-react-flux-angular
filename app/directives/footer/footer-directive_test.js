/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('footer', function () {
  var scope
    , element;

  beforeEach(module('directives.footer', 'directives/footer/footer-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<footer></footer>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().footer.name).toEqual('footer');
  });

});
