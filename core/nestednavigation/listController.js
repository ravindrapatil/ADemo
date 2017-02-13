(function () {
    'use strict';

    angular.module('app.nestednavigation.list', ['app.nestednavigationService'])

            .controller('ListController', ListController);

    ListController.$inject = ['$log', '$scope', 'nestednavigationService', '$stateParams'];

    function ListController($log, $scope, nestednavigationService, $stateParams) {
    	nestednavigationService.getData().then(function (data) {
            $scope.products = data;
            $log.info($scope.products);
        });
    }

})();
