(function () {
    'use strict';

    angular.module('app.nestednavigation', ['app.nestednavigationService'])

            .controller('NestedNavController', NestedNavController);

   NestedNavController.$inject = ['$log', '$scope', 'nestednavigationService'];
    
     function NestedNavController($log, $scope, nestednavigationService) {

     	var vm = this;
        vm.json = [];

     	nestednavigationService.getData().then(function (data) {
            $scope.products = data;
            $scope.noofProfile = $scope.products.length;
        });

    }

})();