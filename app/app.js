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
      'brands'


  ])
   .config([
     'RestangularProvider',
     function (RestangularProvider ) {

       RestangularProvider
         .setBaseUrl('http://localhost/serverApp/backend/web/index.php/backend/')
         // .setDefaultHeaders({'X-Requested-With': 'XMLHttpRequest'})
         .setDefaultRequestParams({accessToken: "45454554qsdkjqlsjQSLQDQKK"})
         .setErrorInterceptor(function (response, deferred, responseHandler) {
           if (response.status === 404) {

           }
         })
         .setFullResponse(true);
     }
   ])
  .run(['$rootScope',   '$location','$state',
    function ($rootScope, $location,$state) {

    $rootScope.$state=$state;



    }])
