var appModel = angular.module('appModel',[
    "ui.router",
    "oc.lazyLoad"
]);

appModel.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/index.html"); 
    $stateProvider
    // Dashboard
    .state('onelist', {
        url: "/onelist.html",
        templateUrl: "views/one/list.html",            
        data: {pageTitle: 'Admin Dashboard Template'},
        controller: "OneListController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'appModel',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                        'js/controllers/OneListController.js',
                    ] 
                });
            }]
        }
    })
    .state('twolist', {
        url: "/twolist.html",
        templateUrl: "views/two/list.html",            
        data: {pageTitle: 'Admin Dashboard Template'},
        controller: "TwoListController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'appModel',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                        'js/controllers/TwoListController.js',
                    ] 
                });
            }]
        }
    })
    .state('threelist', {
        url: "/threelist.html",
        templateUrl: "views/three/list.html",            
        data: {pageTitle: 'Admin Dashboard Template'},
        controller: "ThreeListController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'appModel',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                        'js/controllers/ThreeListController.js',
                    ] 
                });
            }]
        }
    })
    .state('fourlist', {
        url: "/fourlist.html",
        templateUrl: "views/four/list.html",            
        data: {pageTitle: 'Admin Dashboard Template'},
        controller: "FourListController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'appModel',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                        'js/controllers/FourListController.js',
                    ] 
                });
            }]
        }
    })
}]);

