angular.module('app')
  .service('authService', function($http, $state) {

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

    this.currentHero = function() {
      return $http({
        method: 'GET',
        url: '/api/me'
      })
      .then(function(response) {
        return response;
      })
      .catch(function(err) {
        $state.go('splash');
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
