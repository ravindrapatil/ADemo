(function () {
    'use strict';

    angular.module('app.home', ['app.homeService'])

            .controller('HomeController', HomeController);

   HomeController.$inject = ['$log', '$scope', 'homeService', '$http'];
    
     function HomeController($log, $scope, homeService, $http) {

     	var vm = this;
        vm.json = [];
        retrieve();

        function retrieve() {
            return getJson().then(function () {
                $log.info('Retrieved Json');
            });
        }

        function getJson() {
            return homeService.getData().then(function (data) {
                vm.json = data;
                return vm.json;
            });
        }

     	homeService.getData().then(function (data) {            
            $scope.data = data;
            $log.info($scope.data);
        });
    }

})();