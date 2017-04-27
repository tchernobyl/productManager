angular.module('categories')
    .factory('CategoryCategories',
    ['Restangular', function (Restangular) {

        return Restangular.service('category/categories');
    }]);