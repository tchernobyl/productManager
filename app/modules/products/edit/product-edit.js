angular.module('products')
.controller('productEditController', function ($scope, $modalInstance, item, Data) {

  $scope.product = angular.copy(item);

  $scope.cancel = function () {
    $modalInstance.dismiss('Close');
  };
  console.log(item)
  $scope.title = (item.id > 0) ? 'Edit Product' : 'Add Product';
  $scope.buttonText = (item.id > 0) ? 'Update Product' : 'Add New Product';

  var original = item;
  $scope.isClean = function() {
    return angular.equals(original, $scope.product);
  }
  $scope.saveProduct = function (product) {
    product.uid = $scope.uid;
    console.log(product);
    if(product.save){
      delete product.save;
    }
    if(product.id > 0){
      product.sku=55555
      Data.put('products/'+product.id, product).then(function (result) {
        if(result.status != 'error'){
          var x = angular.copy(product);
          x.save = 'update';
          $modalInstance.close(x);
        }else{
          console.log(result);
        }
      });
    }else{
      product.status = 'Active';
      Data.post('products', product).then(function (result) {
        if(result.status != 'error'){
          var x = angular.copy(product);
          x.save = 'insert';
          x.id = result.data;
          $modalInstance.close(x);
        }else{
          console.log(result);
        }
      });
    }
  };
});