app.controller('splashCtrl', function ($state, $scope, ModalService, authService, xpService) {


    $scope.user = false;

    $scope.openSignUpModal = function () {
        ModalService.showModal({
            templateUrl: "./app/modals/signup/signup.ctrl.html",
            controller: "signUpCtrl"
        }).then(function (modal) {
            modal.close.then(function (then) {
            });
        });
    };

    $scope.submitLogin = function (hero) {
      authService.login(hero)
        .then(function (response) {
          if (!response.data) {
              alert(response);
          }
          xpService.addAndUpdate(response.data, 1);
          $state.go('home');
        });
    };

});
