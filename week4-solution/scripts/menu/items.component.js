(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'scripts/menu/templates/itemsComponent.template.html',
        bindings: {
            items: '<'
        }
    });
})();