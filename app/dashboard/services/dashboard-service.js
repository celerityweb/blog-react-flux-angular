'use strict';
angular.module('angularReactEquivalent')
  .factory('DashboardService', function ($http) {
    return {
      searchUser: function (query) {
        return $http.get('https://api.github.com/search/users', {params: {q: query}});
      },
      searchRepos: function(user) {
        return $http.get('https://api.github.com/users/' + user + '/repos');
      }
    };
  });
