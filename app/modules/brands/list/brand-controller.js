/**
 * Created by maryem on 12/07/17.
 */
angular.module('brands')
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('brands.list', {
                    url: '/list',
                    resolve:{
                        brandList:function(BrandBrandsTest){
                            return BrandBrandsTest.getList();
                        }

                    },
                    templateUrl: 'app/modules/brands/list/brands.html',
                    controller: 'brandsController'
                });
        }])
    .controller('brandsController', function ($scope,brandList ) {



        $scope.listBrand=brandList.data;
        var test1=555;
        $scope.content=test1;


        $scope.deleteBrand=function(brand){
            brand.remove();
            console.log("delete object ",brand.name)
        };

        $scope.openBrand=function(brand){
            console.log("show object ",brand.name)
        }




        });
