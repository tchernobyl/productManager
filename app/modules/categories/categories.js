angular.module('categories', [])
  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('categories', {
          abstract: true,
          url: '/categories',
          templateUrl: 'app/templates/layouts/default.html'
        });
    }]);

