 angular.module('myApp',
  [

    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'ngResource',
    'restangular',


    //list modules
    'products',
    'categories',
    'category-categories',
    'product-products'


  ])
   .config([
     'RestangularProvider',
     function (RestangularProvider ) {

       RestangularProvider
         .setBaseUrl('api/v2')
         //                .setDefaultRequestParams({accessToken: API_CONFIG.accessToken, tenantId: API_CONFIG.tenantId})
         .setFullResponse(true);
     }
   ])
  .run(['$rootScope',   '$location','$state',
    function ($rootScope, $location,$state) {

    $rootScope.$state=$state;



    }])
