angular.module('app')
  .service('authService', function($http) {

    this.signUp = function(hero) {
      return $http({
          method: 'POST',
          url: '/api/hero/signUp',
          data: hero
        })
        .then(function(response) {
          return response;
        });
    };

    this.login = function(hero) {
      return $http({
          method: 'POST',
          url: '/api/hero/login',
          data: hero
        })
        .then(function(response) {
          return response;
        });
    };

    this.logout = function() {
      return $http({
        method: 'GET',
        url: '/api/hero/logout'
      })
      .then(function(response) {
        return response;
      });
    };

  });
