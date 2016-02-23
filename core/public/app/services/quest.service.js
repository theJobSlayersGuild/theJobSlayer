angular.module('app')
    .service('questService', function ($http) {

      this.createJob = function(quest) {
        return $http({
          method: 'POST',
          url: '/api/quest',
          data: quest
        })
        .then(function(response){
          return response.data;
        });
      };

      this.getJobs = function() {
          return $http({
              method: 'GET',
              url: '/api/quest'
          })
          .then(function(response) {
              return response.data;
          });
      };

      this.editJob = function(id, quest) {
          return $http({
            method: 'PUT',
            url: '/api/quest/' + id,
            data: message
          })
          .then(function(response){
            return response.data;
          });
      };

        this.deleteJob = function(id) {
          return $http({
            method: 'DELETE',
            url: '/api/quest/' + id
          })
          .then(function(response){
            return response.data;
          });
      };

    });
