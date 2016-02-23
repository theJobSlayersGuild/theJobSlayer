angular.module('app')
    .service('heroService', function ($http) {

      this.getHeroes = function() {
          return $http({
            method: 'GET',
            url: '/api/hero'
          })
          .then(function(response){
            return response;
          });
        };

        this.getHero = function(id) {
            return $http({
              method: 'GET',
              url: '/api/hero?_id=' + id
            })
            .then(function(response){
              return response;
            });
          };


    });
