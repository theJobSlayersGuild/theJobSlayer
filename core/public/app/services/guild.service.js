angular.module('app')
    .service('guildService', function ($http) {

      this.createJob = function(guild) {
        return $http({
          method: 'POST',
          url: '/api/guild',
          data: guild
        })
        .then(function(response){
          return response.data;
        });
      };

      this.getJobs = function() {
          return $http({
              method: 'GET',
              url: '/api/guild'
          })
          .then(function(response) {
              return response.data;
          });
      };

      this.editJob = function(id, guild) {
          return $http({
            method: 'PUT',
            url: '/api/guild/' + id,
            data: message
          })
          .then(function(response){
            return response.data;
          });
      };

        this.deleteJob = function(id) {
          return $http({
            method: 'DELETE',
            url: '/api/guild/' + id
          })
          .then(function(response){
            return response.data;
          });
      };

    });
