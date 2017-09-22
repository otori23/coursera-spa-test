(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buyList = this;

		buyList.items = ShoppingListCheckOffService.getBuyList(); 

		buyList.buyItem = function(itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtList = this;

		boughtList.items = ShoppingListCheckOffService.getBoughtList();
	}

	function ShoppingListCheckOffService() {
		var service = this;

		// Lists
		var buyList = [
			{name: "cookies", quantity: 10},
			{name: "ice cream", quantity: 2},
			{name: "cake", quantity: 4},
			{name: "plantians", quantity: 36},
			{name: "fish", quantity: 5},
			{name: "okra", quantity: 17},
			{name: "tomatos", quantity: 23},
		];

		var boughtList = [];

		service.getBuyList = function() {
			return buyList;
		};

		service.getBoughtList = function() {
			return boughtList;
		};

		service.buyItem = function (itemIndex) {
			boughtList.push(buyList.splice(itemIndex, 1)[0]);
		};
	}

})();