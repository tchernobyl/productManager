/**
 * Created by maryem on 12/07/17.
 */
angular.module('brands')
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('brands.list', {
                    url: '/list',
                    templateUrl: 'app/modules/brands/list/brands.html',
                    controller: 'brandsController'
                });
        }])
    .controller('brandsController', function ($scope ) {



    });
