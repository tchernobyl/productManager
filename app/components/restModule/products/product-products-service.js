angular.module('product-products')
    .factory('ProductProducts',
    ['Restangular', function (Restangular) {
        Restangular.extendModel('products', function (model) {



            return model;
        });
        return Restangular.service('products');
    }]);