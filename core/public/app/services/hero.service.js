angular.module('app')
  .service('heroService', function($http) {

    this.getHeroes = function() {
      return $http({
          method: 'GET',
          url: '/api/hero'
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getHero = function(id) {
      return $http({
          method: 'GET',
          url: '/api/hero?_id=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getHeroByEmail = function(email) {
      return $http({
          method: 'GET',
          url: '/api/hero?email=' + email
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.editHero = function(hero) {
      delete hero.password;
      return $http({
          method: 'PUT',
          url: '/api/hero/' + hero._id,
          data: hero
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.removeHero = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/hero/' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

  });
