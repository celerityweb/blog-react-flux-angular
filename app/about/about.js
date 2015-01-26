'use strict';

/* @ngdoc object
 * @name about
 * @requires $stateProvider
 *
 * @description
 *
 */
angular
  .module('about', [
    'ui.router'
  ]);

angular
  .module('about')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.tpl.html',
        controller: 'AboutCtrl as about'
      });
  });
