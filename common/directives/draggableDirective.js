(function () {
    'use strict';

    angular.module('app.directives.draggable', ['app'])

            .directive('draggable', draggable);

    draggable.$inject = [];

    function draggable() {
        var directive = {
            restrict: 'A',
            link: function(scope, element, attributes, ctlr) {
                element.attr("draggable", true);
                element.bind("dragstart", function(eventObject) {
                    eventObject.originalEvent.dataTransfer.setData("text", attributes.itemid);
                });
            }
        };
        return directive;
    }
})();