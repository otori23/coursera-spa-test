(function() {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		var comma = ',';

		$scope.isSuccess = false;

		$scope.isFailure = false;

		$scope.foodNames = "";

		$scope.message = "";

		$scope.checkLunch = function() {
			// remove empty items; i.e. , ,
			var foodNames = $scope.foodNames.replace(/,[, ]+/g, ',').trim();

			// remove leading comma, if any
			foodNames = foodNames.replace(/^,/, '');

			// remove trailing comma, if any
			foodNames = foodNames.replace(/,$/, '');

			$scope.foodNames = foodNames;
			var numFoods = (foodNames.length === 0) ? 0 : foodNames.split(comma).length;

			if (numFoods === 0) 
			{
				$scope.message = "Please enter data first";
				$scope.isSuccess = false;
				$scope.isFailure = false;
			}
			else if(numFoods <= 3)
			{
				$scope.message = "Enjoy!";
				$scope.isSuccess = true;
				$scope.isFailure = false;
			}
			else if(numFoods > 3) {
				$scope.message = "Too Much!";
				$scope.isSuccess = false;
				$scope.isFailure = true;
			}
		};

		$scope.resetMessage = function() {
			$scope.message = "";
		}
	}
})();