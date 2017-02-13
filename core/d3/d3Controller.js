(function () {
    'use strict';

    angular.module('app.d3', ['app.d3Service'])

            .controller('D3Controller', D3Controller);

    D3Controller.$inject = ['$log', 'd3Service', '$scope'];

    function D3Controller($log, d3Service, $scope) {
        var vm = this;

        vm.json = [];

        
        d3Service.getData().then(function (data) {
            $scope.d3Data = data;
            $log.info($scope.d3Data);
        });

        $scope.myData = [10, 20, 60, 80, 50, 96, 28];

    }
})();
