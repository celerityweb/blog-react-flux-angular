'use strict';

/**
 * @ngdoc directive
 * @name directives.header.directive:header
 * @restrict EA
 * @element
 *
 * @description
 *
 * @example
   <example module="directives.header">
     <file name="index.html">
      <header></header>
     </file>
   </example>
 *
 */
angular
  .module('angularReactEquivalent')
  .directive('header', function () {
    return {
      restrict: 'AE',
      scope: {},
      templateUrl: 'directives/header/header-directive.tpl.html',
      replace: false,
      controllerAs: 'header',
      controller: function () {
        var vm = this;
        vm.name = 'header';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  });
