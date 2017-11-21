(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'SignupService', 'ApiPath'];
function SignupController(MenuService, SignupService, ApiPath) {
  var signupCtrl = this;

  signupCtrl.onSubmit = function() {
    signupCtrl.success = false;
    signupCtrl.error = false;
    MenuService.getMenuItem(signupCtrl.favorite)
    .then(function (response) {
        signupCtrl.success = true;

        var userInfo = {};
        userInfo.firstname  = signupCtrl.firstname;
        userInfo.lastname   = signupCtrl.lastname;
        userInfo.email      = signupCtrl.email;
        userInfo.telephone  = signupCtrl.telephone;

        userInfo.favorite               = {};
        userInfo.favorite.title         = response.data.name;
        userInfo.favorite.description   = response.data.description;
        userInfo.favorite.image         = ApiPath + '/images/' + response.data.short_name + '.jpg';

        SignupService.setUserInfo(userInfo);
    })
    .catch(function(error) {
        signupCtrl.error = true;
        SignupService.clearUserInfo();
    });
  };
}

})();
