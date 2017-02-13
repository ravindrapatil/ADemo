(function () {
    'use strict';

    angular.module('app.nestednavigationService', [])

            .factory('nestednavigationService', nestednavigationService);

    nestednavigationService.$inject = ['$http', '$log', '$q'];

    function nestednavigationService($http, $log, $q) {
        return {
            getData: getData
        };

        function getData() {
            return $http.get('assets/data/products.json')
                    .then(getDataComplete)
                    .catch(getDataFailed);

            function getDataComplete(response) {
                return response.data;
            }

            function getDataFailed(e) {
                var newMessage = 'XHR Failed for getData.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
    }
})();
