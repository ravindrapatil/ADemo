(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.index',
        'app.home',
        'app.form',
        'app.json',
        'app.nav.footer',
        'app.nav.header',
        'app.nav.menu',
        'app.directives.datepicker',
        'app.directives.about',
        'app.filters'
    ]);
})();
