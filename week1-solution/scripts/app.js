(function() {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		var comma = ',';


		$scope.foodNames = "";

		$scope.message = "";

		$scope.checkLunch = function() {
			var foodNames = $scope.foodNames.replace(/[, ]+/g, ',').trim();
			foodNames = foodNames.replace(/^,/, '');
			foodNames = foodNames.replace(/,$/, '');
			$scope.foodNames = foodNames;
			var numFoods = (foodNames.length === 0) ? 0 : foodNames.split(comma).length;

			if (numFoods === 0) 
			{
				$scope.message = "Please enter data first";
			}
			else if(numFoods <= 3)
			{
				$scope.message = "Enjoy!";
			}
			else {
				$scope.message = "Too Much!";
			}
		};

		$scope.resetMessage = function() {
			$scope.message = "";
		}
	}
})();