(function () {
    'use strict';

    angular.module('app.nestednavigation.details', ['app.nestednavigationService'])

            .controller('DetailsController', DetailsController);

    DetailsController.$inject = ['$log', '$scope', 'nestednavigationService', '$stateParams'];

    function DetailsController($log, $scope, nestednavigationService, $stateParams) {

    	$scope.id = $stateParams.id;

    	nestednavigationService.getData().then(function (data) {
            $scope.products = data;
            $log.info($scope.products);
	    	$scope.profileList = [];
	    	for(var i = 0; i < $scope.products.length; i++){
	            var result = $scope.products[i];
	            if(result._id === $scope.id){
	                $scope.profileList.push(result);
	            }
	        }
        });

    }

})();
