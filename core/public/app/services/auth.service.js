angular.module('app')
    .service('authService', function ($http) {

      this.signUp = function(hero) {
        return $http({
          method: 'POST',
          url: '/api/hero/signUp',
          data: hero
        })
        .then(function(response){
          return response;
        });
      };

      this.login = function(hero) {
        return $http({
          method: 'POST',
          url: '/api/hero/login',
          data: hero
        })
        .then(function(response){
          return response;
        });
      };


        this.getJobs = function() {
            return $http({
                method: 'GET',
                url: '/api/job'
            }).then(function(response) {
                return response.data;
            });
        };

        this.acceptQuest = function(quest) {
            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: quest

            }).then(function(response) {
                return response.data;
            });
        };

    });
