angular.module('categories')
  .config(['$stateProvider',
    function ($stateProvider,Data) {
      $stateProvider
        .state('categories.list', {
          url: '/list',
          resolve:{
            _categories:['Data',function(Data){
              return Data.get('categories').then(function(data){

                return  data.data;

              });
            }]
          },
          templateUrl: 'app/modules/categories/list/categories.html',
          controller: 'categoriesController'
        });
    }])
.controller('categoriesController', function ($scope, $modal, $filter, _categories,Data) {

  $scope.category = {};


    $scope.categories = _categories;

  $scope.changeCategoryStatus = function(category){
    category.status = (category.status=="Active" ? "Inactive" : "Active");
    Data.put("categories/"+category.id,{status:category.status});
  };
  $scope.deleteCategory = function(category){
    if(confirm("Are you sure to remove the category")){
      Data.delete("categories/"+category.id).then(function(result){
        $scope.categories = _.without($scope.categories, _.findWhere($scope.categories, {id:category.id}));
      });
    }
  };
  $scope.open = function (p,size) {
    var modalInstance = $modal.open({
      templateUrl: 'app/modules/categories/edit/category-edit.html',
      controller: 'categoryEditController',
      size: size,
      resolve: {
        item: function () {
          return p;
        }
      }
    });
    modalInstance.result.then(function(selectedObject) {
      if(selectedObject.save == "insert"){
        $scope.categories.push(selectedObject);
        $scope.categories = $filter('orderBy')($scope.categories, 'id', 'reverse');
      }else if(selectedObject.save == "update"){
        p.description = selectedObject.description;

      }
    });
  };

  $scope.columns = [
    {text:"ID",predicate:"id",sortable:true,dataType:"number"},
    {text:"Name",predicate:"name",sortable:true},
    {text:"Description",predicate:"description",sortable:true},
    {text:"Status",predicate:"status",sortable:true},
    {text:"Action",predicate:"",sortable:false}
  ];

})


