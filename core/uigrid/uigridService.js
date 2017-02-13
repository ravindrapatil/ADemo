(function () {
    'use strict';

    angular.module('app.uigridService', [])

            .factory('uigridService', uigridService);

    uigridService.$inject = ['$http', '$log', '$q'];

    function uigridService($http, $log, $q) {
        return {
            getData: getData
        };

        function getData() {
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
