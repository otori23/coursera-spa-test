(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');
  
        // *** Set up UI states ***
        $stateProvider
    
        // Home Page
        .state('home', {
            url: '/',
            templateUrl: 'scripts/menu/templates/home.template.html'
        })

        // Menu Categories Page
        .state('menuCategories', {
            url: '/menu-categories',
            templateUrl: 'scripts/menu/templates/categories.template.html',
            controller: 'MenuCategoriesController as categoriesCtrl',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                  return MenuDataService.getAllCategories();
                }]
            }
        })

        // Category Items Page
        .state('items', {
            url: '/items/{categoryShortName}',
            templateUrl: 'scripts/menu/templates/items.template.html',
            controller: 'CategoryItemsController as itemsCtrl',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                  return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        })
        ;
    }
})();