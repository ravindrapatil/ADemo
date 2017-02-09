(function () {
    'use strict';

    angular.module('app.homeService', [])

            .factory('homeService', homeService);

    homeService.$inject = ['$http', '$log', '$q'];

    function homeService($http, $log, $q) {
        return {
            getData: getData
        };

        function getData() {
            return $http.get('/productsList')
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
