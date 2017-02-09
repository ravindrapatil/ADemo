(function () {
    'use strict';

    angular.module('app')

            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.when('/', '/home');
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('root', {
                    abstract: true,
                    url: '/',
                    data: {
                        title: 'Home',
                        breadcrumb: 'Home'
                    },
                    views: {
                        'header': {
                            templateUrl: 'core/navigation/headerView.html',
                            controller: 'HeaderController',
                            controllerAs: 'HC'
                        },
                        'menu': {
                            templateUrl: 'core/navigation/menuView.html',
                            controller: 'MenuController',
                            controllerAs: 'MC'
                        },
                        'content': {
                            template: 'Choose option from menu...'
                        },
                        'footer': {
                            templateUrl: 'core/navigation/footerView.html',
                            controller: 'FooterController',
                            controllerAs: 'FC'
                        }
                    }
                })
                .state('root.home', {
                    url: 'home',
                    data: {
                        title: 'Home',
                        breadcrumb: 'Home'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/home/homeView.html',
                            controller: 'HomeController',
                            controllerAs: 'HC'
                        }
                    }
                })
                .state('root.json', {
                    url: 'json',
                    data: {
                        title: 'Json',
                        breadcrumb: 'Json'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/json/jsonView.html',
                            controller: 'JsonController',
                            controllerAs: 'JC'
                        }
                    }
                })
                .state('root.form', {
                    url: 'form',
                    data: {
                        title: 'Form',
                        breadcrumb: 'Form'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/form/formView.html',
                            controller: 'FormController',
                            controllerAs: 'FC'
                        }
                    }
                });
    }
})();
