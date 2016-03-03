angular.module("app").controller("editProfileCtrl", function($scope, close, text) {
  $scope.close = close;
  $scope.text = text;

  $scope.edit = function(newInfo, title) {
    console.log(newInfo);

    switch (text) {
      case 'EDIT HERO':
        close({
          name: newInfo,
          title: title
        });
        break;
      case 'EDIT RESUME':
        close({
          resume: newInfo
        });
        break;
      case 'EDIT LINKEDIN':
        close({
          linkedin: newInfo
        });
        break;
      case 'EDIT PORTFOLIO':
        close({
          portfolioSite: newInfo
        });
        break;
    }
  };

});
