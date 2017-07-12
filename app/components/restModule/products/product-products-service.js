angular.module('products')
    .factory('ProductProducts',
    ['Restangular', function (Restangular) {

        return Restangular.service('product/products');
    }]);

angular.module('brands')
    .factory('',
        ['Restangular', function (Restangular) {

            return Restangular.service('product/products');
        }]);