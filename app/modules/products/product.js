angular.module('products', [])
  .config(['$stateProvider',
    function ($stateProvider) {
    console.log(555)
      $stateProvider
        .state('products', {
          abstract: true,
          url: '/products',
          templateUrl: 'app/templates/layouts/default.html'
        });
    }]);

