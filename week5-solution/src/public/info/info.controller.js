(function () {
    "use strict";
    
    angular.module('public')
    .controller('InfoController', InfoController);
    
    InfoController.$inject = ['userInfo'];
    function InfoController(userInfo) {
      var infoCtrl = this;
    
      infoCtrl.userInfo = angular.copy(userInfo);
    }
    
})();
    