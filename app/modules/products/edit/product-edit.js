angular.module('products')
.controller('productEditController', function ($scope, $modalInstance, item, Data) {
  var original = angular.copy(item);
  $scope.product = item;

  $scope.cancel = function () {
    $scope.product = original;
    $modalInstance.dismiss('Close');
  };
  console.log(item)
  $scope.title = (item.id > 0) ? 'Edit Product' : 'Add Product';
  $scope.buttonText = (item.id > 0) ? 'Update Product' : 'Add New Product';


  $scope.isClean = function() {
    return angular.equals(original, $scope.product);
  };
  $scope.saveProduct = function (product) {
    $modalInstance.close(product);
  };
});