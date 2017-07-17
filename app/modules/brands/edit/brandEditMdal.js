angular.module('brands')
    .controller('editBrandModalController', function ($scope,br,test1) {

        console.log('br ',br)
        console.log('test1 ',test1)

        $scope.brand=br;

        $scope.saveOrUpdateBrand=function () {

            $scope.brand.save();

        };

        $scope.getButtonName=function () {
            if($scope.brand.id){
                return "Update Brand";
            }
            return "Save Brand";

        }
    });