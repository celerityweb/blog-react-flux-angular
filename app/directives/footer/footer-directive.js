'use strict';

/**
 * @ngdoc directive
 * @name directives.footer.directive:footer
 * @restrict EA
 * @element
 *
 * @description
 *
 * @example
   <example module="directives.footer">
     <file name="index.html">
      <footer></footer>
     </file>
   </example>
 *
 */
angular
  .module('angularReactEquivalent')
  .directive('footer', function () {
    return {
      restrict: 'AE',
      scope: {},
      templateUrl: 'directives/footer/footer-directive.tpl.html',
      replace: false,
      controllerAs: 'footer',
      controller: function () {
        var vm = this;
        vm.name = 'footer';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  });
