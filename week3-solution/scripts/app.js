(function () {
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

	function FoundItemsDirective() {
		var ddo = {
			restrict: 'E',
			templateUrl: 'views/foundItems.html',
			scope: {
				foundItems: '<',
				onRemove: '&'
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'ctrl',
			bindToController: true
		};

		return ddo;
	}

	function FoundItemsDirectiveController() {
		var ctrl = this;
	}

	NarrowItDownController.$inject = ['$log', 'MenuSearchService'];
	function NarrowItDownController ($log, MenuSearchService) {
		var ctrl = this;

		ctrl.searchTerm = "";

		ctrl.getMatchedMenuItems = function () {
			MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
			.then(function(result) {
				ctrl.found = result;
			});
		};

		ctrl.removeItem = function(itemIndex) {
			ctrl.found.splice(itemIndex, 1);
		};
	}

	MenuSearchService.$inject = ['$http', '$filter', 'ApiBasePath'];
	function MenuSearchService ($http, $filter, ApiBasePath) {
		var service = this;

		service.getMatchedMenuItems = function (searchTerm) {
			return $http({
				method: "GET",
				url: ApiBasePath + "/menu_items.json",
			}).then(function (result) {
			    // process result and only keep items that match
			    var foundItems = $filter('filter')(result.data.menu_items, searchTerm, false, 'description');

			    // return processed items
			    return foundItems;
			});
		};
	}
})();