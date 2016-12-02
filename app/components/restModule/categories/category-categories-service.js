angular.module('category-categories')
    .factory('CategoryCategories',
    ['Restangular', function (Restangular) {
        Restangular.extendModel('categories', function (model) {



            return model;
        });
        return Restangular.service('categories');
    }]);