'use strict';

/**
 * @ngdoc object
 * @name dashboard.controller:DashboardCtrl
 *
 * @description
 *
 */
angular
  .module('dashboard')
  .controller('DashboardCtrl', function (DashboardService) {
    var vm = this;
    vm.ctrlName = 'DashboardCtrl';

    vm.user = {
      name:  '',
      imgsrc: '',
      repos: []
    };

    vm.isSearchValid = true;

    vm.searchUser = function (query) {
      DashboardService.searchUser(query)
        .success(function (res) {
          vm.isSearchValid = true;
          if(!res.total_count) {
            vm.isSearchValid = false;
          }
          vm.user.name = res.items[0].login;
          vm.user.imgsrc = res.items[0].avatar_url;
          getUserRepos(vm.user.name);
        });
    };

    function getUserRepos(user) {
      DashboardService.searchRepos(user).success(function (res) {
        vm.user.repos = res;
      });
    }
  });
