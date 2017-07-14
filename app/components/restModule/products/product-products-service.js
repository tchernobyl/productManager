angular.module('products')
    .factory('ProductProducts',
    ['Restangular', function (Restangular) {

        return Restangular.service('product/products');
    }])


    .factory('BrandBrandsTest',
        ['Restangular', function (Restangular) {

            return Restangular.service('brand/brands');
        }]);