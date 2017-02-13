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
                .state('root.uigrid', {
                    url: 'uigrid',
                    data: {
                        title: 'UI Grid',
                        breadcrumb: 'UI Grid'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/uigrid/uigridView.html',
                            controller: 'UIGridController',
                            controllerAs: 'UC'
                        }
                    }
                })
                .state('root.dragndrop', {
                    url: 'dragndrop',
                    data: {
                        title: 'Drag And Drop',
                        breadcrumb: 'Drag-N-Drop'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/dragndrop/dragndropView.html',
                            controller: 'DragnDropController',
                            controllerAs: 'DNDC'
                        }
                    }
                })
                .state('root.d3', {
                    url: 'd3',
                    data: {
                        title: 'D3',
                        breadcrumb: 'D3'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/d3/d3View.html',
                            controller: 'D3Controller',
                            controllerAs: 'D3C'
                        }
                    }
                })
                .state('root.nestednavigation', {
                    url: 'nestednavigation',
                    data: {
                        title: 'Nested Navigation',
                        breadcrumb: 'Nested Navigation'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/nestednavigation/nestednavigationView.html',
                            controller: 'NestedNavController',
                            controllerAs: 'NNC'
                        }
                    }
                })
                .state('root.nestednavigation.list', {
                    url: '/list',
                    data: {
                        title: 'List Navigation',
                        breadcrumb: 'List Navigation'
                    },
                    templateUrl: 'core/nestednavigation/listView.html',
                    controller: 'ListController',
                    controllerAs: 'LC'
                })
                .state('root.nestednavigation.list.details', {
                    url: '/details/:id',
                    data: {
                        title: 'List Details',
                        breadcrumb: 'List Details'
                    },
                    templateUrl: 'core/nestednavigation/detailsView.html',
                    controller: 'DetailsController',
                    controllerAs: 'DC'
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
