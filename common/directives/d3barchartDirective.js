(function () {
    'use strict';

    angular.module('app.directives.d3barchart', ['app'])

            .directive('barChart', barChart);

    barChart.$inject = ['$parse'];

    function barChart($parse) {
        var directive = {
            restrict: 'E',
            replace: false,
            scope: {data: '=chartData'},
            link: function (scope, element, attrs) {
            	var chart = d3.select(element[0]);
            	chart.append("div").attr("class", "chart")
				.selectAll('div')
				.data(scope.data).enter().append("div")
				//.transition().ease("elastic")
				.transition()
				.style("background-color", "orange")
				.style("width", function(d) { return d + "%"; })
				.text(function(d) { return d + "%"; });
			}
        };
        return directive;
    }
})();