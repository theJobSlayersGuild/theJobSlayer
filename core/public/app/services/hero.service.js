angular.module('app')
    .service('heroService', function ($http) {

      this.getHeroes = function() {
          return $http({
            method: 'GET',
            url: '/hero'
          })
          .then(function(response){
            return response;
          });
        };

        this.getHero = function() {
            return $http({
              method: 'GET',
              url: '/hero?_id=' + id
            })
            .then(function(response){
              return response;
            });
          };


    });
