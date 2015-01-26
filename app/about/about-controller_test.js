/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('AboutCtrl', function () {
  var ctrl;

  beforeEach(module('about'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AboutCtrl');
  }));

  it('should have ctrlName as AboutCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AboutCtrl');
  });

});
