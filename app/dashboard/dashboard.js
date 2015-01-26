'use strict';

/* @ngdoc object
 * @name dashboard
 * @requires $stateProvider
 *
 * @description
 *
 */
angular
  .module('dashboard', [
    'ui.router'
  ]);

angular
  .module('dashboard')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'dashboard/dashboard.tpl.html',
        controller: 'DashboardCtrl as dashboard'
      });
  });
