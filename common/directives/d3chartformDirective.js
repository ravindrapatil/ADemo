(function () {
    'use strict';

    angular.module('app.directives.d3chartform', ['app'])

            .directive('chartForm', chartForm);

    chartForm.$inject = [];

    function chartForm() {
        var directive = {
            restrict: 'A',
            link: function(scope, element, attributes, ctlr) {
            	
            }
        };
        return directive;
    }
})();