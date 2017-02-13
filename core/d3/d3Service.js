(function () {
    'use strict';

    angular.module('app.d3Service', [])

            .factory('d3Service', d3Service);

    d3Service.$inject = ['$http', '$log', '$q'];

    function d3Service($http, $log, $q) {
        return {
            getData: getData
        };

        function getData() {
            return $http.get('assets/data/flare.json')
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
