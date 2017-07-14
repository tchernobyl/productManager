angular.module('brands', [])
    .config(['$stateProvider',
        function ($stateProvider) {
            console.log(555)
            $stateProvider
                .state('brands', {
                    abstract: true,
                    url: '/brands',
                    templateUrl: 'app/templates/layouts/default.html'
                });
        }]);

