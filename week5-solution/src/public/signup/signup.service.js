(function () {
    "use strict";
    
    angular.module('public')
    .service('SignupService', SignupService);
    
    function SignupService() {
      var service = this;
    
      service.setUserInfo = function (userInfo) {
          service.userInfo = userInfo;
      };

      service.clearUserInfo = function () {
          service.userInfo = undefined;
      };
      
      service.getUserInfo = function () {
          return service.userInfo;
      };  
    }
})();   