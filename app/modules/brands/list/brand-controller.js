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
                            return BrandBrandsTest.getList()
                                .then(function (result) {
                                    /**
                                     *
                                     */
                                return result;
                            })
                        },
                        _brandEmpty:function(BrandBrandsTest){
                            return BrandBrandsTest.one();
                        }

                    },
                    templateUrl: 'app/modules/brands/list/brands.html',
                    controller: 'brandsController'
                });
        }])
    .controller('brandsController', function ($scope,brandList,_brandEmpty ,$modal) {


        $scope.emptyBrand=_brandEmpty;

        $scope.listBrand=brandList.data;
        var test1=555;
        $scope.content=test1;



        $scope.deleteBrand=function(brand){
            brand.remove();
            console.log("delete object ",brand.name)
        };

        $scope.openBrand=function(brand){

            var modalInstance = $modal.open({
                templateUrl: 'app/modules/brands/edit/brand-edit-modal.html',
                controller: 'editBrandModalController',
                // size: size,
                resolve: {
                    br: function () {
                        return brand;
                    },
                    test1:function(){
                        return 'bla bla bla '
                    }
                }
            });

        }




        });
