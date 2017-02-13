(function () {
    'use strict';

    angular.module('app.brands', [])

            .filter('mapGender', mapGender);

    mapGender.$inject = ['$scope'];

    function mapGender($scope) {
        return function () {
            var genderHash = {
                1: 'male',
                2: 'female'
            };
            return function(input) {
                if (!input){
                    return '';
                } else {
                    return genderHash[input];
                }
            }
        };
    }
})();
