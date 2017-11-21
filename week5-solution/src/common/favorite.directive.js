(function () {
    "use strict";
    
    angular.module('common')
    .directive('favorite', FavoriteDirective);    
    
    FavoriteDirective.$inject = ['$http', 'ApiPath'];
    function FavoriteDirective($http, ApiPath) {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
              console.log(ctrl);
              ctrl.$asyncValidators.favorite = function(modelValue, viewValue) {
                  return $http.get(ApiPath + '/menu_items' + '/' + modelValue + ".json");
              };
            }
        };
    }
    
})();
    