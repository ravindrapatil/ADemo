(function () {
    'use strict';

    angular.module('app.dragndropService', [])

            .factory('dragndropService', dragndropService);

    dragndropService.$inject = ['$http', '$log', '$q'];

    function dragndropService($http, $log, $q) {
        return {
            getData: getData,
            getGridData: getGridData
        };

        function getData() {
            return $http.get('assets/data/dragndrop.json')
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

        function getGridData() {
            return $http.get('assets/data/500.json')
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
