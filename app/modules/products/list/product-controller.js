angular.module('products')
  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('products.list', {
          url: '/list',
          resolve:{
            _productList:function(ProductProducts){
              return ProductProducts.getList();
            },
            _productEmpty:function(ProductProducts){
              return ProductProducts.one();
            }

          },

          templateUrl: 'app/modules/products/list/products.html',
          controller: 'productsController'
        });
    }])
.controller('productsController', function ($scope, $modal, $filter, Data,_productList,_productEmpty) {
  console.log(_productList);
  $scope.productsOrigine=angular.copy(_productList.data);
  $scope.products=_productList.data;

  $scope.deleteProduct=function(product){
    console.log(product);
    product.remove();
  };
  $scope.NewProduct=_productEmpty;
  console.log($scope.NewProduct)
  $scope.open = function (p,size) {
    console.log(p);

    var __original = angular.copy(p);
    var modalInstance = $modal.open({
      templateUrl: 'app/modules/products/edit/product-edit.html',
      controller: 'productEditController',
      size: size,
      resolve: {
        item: function () {
          return p;
        }
      }
    });
    modalInstance.result.then(function(returnedObject) {
      console.log(p)
      console.log(999)
      returnedObject.save();
    },function(){
      $scope.products=$scope.productsOrigine;

    });
  };



})


