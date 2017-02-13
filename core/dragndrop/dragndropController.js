(function () {
    'use strict';

    angular.module('app.dragndrop', ['app.dragndropService', 'ui.grid', 'ui.grid.pagination'])

            .controller('DragnDropController', DragnDropController);

    DragnDropController.$inject = ['$log', 'dragndropService', '$scope', 'uiGridConstants'];

    function DragnDropController($log, dragndropService, $scope, uiGridConstants) {
        var vm = this;

        dragndropService.getData().then(function (data) {            
            $scope.dragItems = data;
            $log.info($scope.dragItems);
        });

        $scope.dropped = [];
        $scope.moveToBox = function(id) {
            for (var index = 0; index < $scope.dragItems.length; index++) {
                var item = $scope.dragItems[index];
                if (item.id == id) {
                    // add to dropped array
                    $scope.dropped.push(item);
                    // remove from items array
                    $scope.dragItems.splice(index, 1);
                }
            }
            $scope.$apply();
        };

        $scope.gridOptions = {
        	enableSorting: true,
        	paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
        	columnDefs: [
              { name: 'name' },
              { name: 'gender' },
              { name: 'company' },
              { name: 'email'}
            ]
        }

    }
})();
