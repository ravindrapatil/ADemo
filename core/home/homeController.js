(function () {
    'use strict';

    angular.module('app.home', ['app.homeService'])

            .controller('HomeController', HomeController);

   HomeController.$inject = ['$log', '$scope', 'homeService', '$http', '$filter'];
    
     function HomeController($log, $scope, homeService, $http, $filter) {

     	var vm = this;
        vm.json = [];        

     	homeService.getData().then(function (data) {            
            $scope.products = data;
            //$log.info($scope.products);
        });


        $scope.myHomeView = true;
        $scope.search=[];
        $scope.cartList = JSON.parse(window.sessionStorage.getItem('cartList')) || [];
        $scope.items = window.sessionStorage.getItem("noofitems");

        $scope.addtocart = function(id){
            $log.info(id);
            for(var i = 0; i < $scope.products.length; i++){
                var result = $scope.products[i];
                if(result._id === id){
                    $scope.cartList.push(result);
                    window.sessionStorage.setItem("cartList", JSON.stringify($scope.cartList));
                    //$("#"+id).addClass('stopevent disabled');
                }
            }
            $scope.items = $scope.cartList.length;
            window.sessionStorage.setItem("noofitems", $scope.items);
        }
        
        $scope.cartDetails = function(){
            $("#myModal").modal('show');
        }

        $scope.removeItem = function(id){
            $scope.cartList.splice(id, 1);
            $scope.items = $scope.cartList.length;
            window.sessionStorage.setItem("cartList", JSON.stringify($scope.cartList));
            window.sessionStorage.setItem("noofitems", $scope.items);
        }

        $scope.$watch('cartList', function() {
            var cartTotal = 0;
            for(var i = 0; i < $scope.cartList.length; i++){
                cartTotal += $scope.cartList[i].age;
            };
            $scope.total = cartTotal;
        }, true);
    }

})();