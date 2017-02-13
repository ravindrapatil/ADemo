(function () {
    'use strict';

    angular.module('app.directives.droptarget', ['app', 'app.dragndropService'])

            .directive('droptarget', droptarget);

    droptarget.$inject = ['dragndropService', '$http'];

    function droptarget(dragndropService, $http) {
        var directive = {
            restrict: 'A',
            link: function (scope, element, attributes, ctlr) { 
                element.bind("dragover", function(eventObject){
                    eventObject.preventDefault();                    
                });
                element.bind("drop", function(eventObject) {
                    // invoke controller/scope move method
                    scope.moveToBox(parseInt(eventObject.originalEvent.dataTransfer.getData("text")));
                    // cancel actual UI element from dropping, since the angular will recreate a the UI element
                    eventObject.preventDefault();
                    dragndropService.getGridData().then(function (data) { 
                        scope.hideGrid = data;
                        //scope.hideGrid = true;
                        scope.gridOptions.data = data;
                    });
                });
            }
        };
        return directive;
    }
})();