(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.index',
        'app.home',
        'app.form',
        'app.d3',
        'app.nestednavigation',
        'app.nestednavigation.list',
        'app.nestednavigation.details',
        'app.nav.footer',
        'app.nav.header',
        'app.nav.menu',
        'app.directives.datepicker',
        'app.directives.about',
        'app.filters',
        'app.brands',
        'app.uigrid',
        'app.dragndrop',
        'app.directives.draggable',
        'app.directives.droptarget',
        'app.directives.d3barchart',
        'app.directives.d3chartform'        
    ]);
})();
