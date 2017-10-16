(function () {
    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'scripts/menu/templates/categoriesComponent.template.html',
        bindings: {
            categories: '<'
        }
    });
})();