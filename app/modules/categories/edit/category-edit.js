angular.module('categories')
.controller('categoryEditController', function ($scope, $modalInstance, item, Data) {

  $scope.category = angular.copy(item);

  $scope.cancel = function () {
    $modalInstance.dismiss('Close');
  };

  console.log(item)
  $scope.title = (item.id ) ? 'Edit Category' : 'Add Category';
  $scope.buttonText = (item.id > 0) ? 'Update Category' : 'Add New Category';

  var original = item;
  $scope.isClean = function() {
    return angular.equals(original, $scope.category);
  }
  $scope.saveCategory = function (category) {
    category.uid = $scope.uid;
    console.log(category);
    if(category.save){
      delete category.save;
    }
    if(category.id > 0){
      Data.put('categories/'+category.id, category).then(function (result) {
        if(result.status != 'error'){
          var x = angular.copy(category);
          x.save = 'update';
          $modalInstance.close(x);
        }else{
          console.log(result);
        }
      });
    }else{
      category.status = 'Active';
      Data.post('categories', category).then(function (result) {
        if(result.status != 'error'){
          var x = angular.copy(category);
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