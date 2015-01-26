'use strict';

/* @ngdoc object
 * @name angularReactEquivalent
 * @requires $urlRouterProvider
 *
 * @description
 *
 */
angular
  .module('angularReactEquivalent', [
    'ui.router',
    'dashboard',
    'about'
  ]);

angular
  .module('angularReactEquivalent')
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  });
