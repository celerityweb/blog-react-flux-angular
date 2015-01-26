/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('DashboardCtrl', function () {
  var ctrl;

  beforeEach(module('dashboard'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('DashboardCtrl');
  }));

  it('should have ctrlName as DashboardCtrl', function () {
    expect(ctrl.ctrlName).toEqual('DashboardCtrl');
  });

});
