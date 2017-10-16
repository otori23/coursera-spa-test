(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('CategoryItemsController', CategoryItemsController);

    CategoryItemsController.$inject = ['items'];
    function CategoryItemsController(items) {
        var itemsCtrl = this;
        itemsCtrl.items = items.data.menu_items;
        itemsCtrl.categoryName = items.data.category.name;
    }
})();