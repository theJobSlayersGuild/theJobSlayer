angular.module('app')
    .service('resourceService', function ($http) {

      this.createJob = function(resource) {
        return $http({
          method: 'POST',
          url: '/api/resource',
          data: resource
        })
        .then(function(response){
          return response.data;
        });
      };

      this.getJobs = function() {
          return $http({
              method: 'GET',
              url: '/api/resource'
          })
          .then(function(response) {
              return response.data;
          });
      };

      this.editJob = function(id, resource) {
          return $http({
            method: 'PUT',
            url: '/api/resource/' + id,
            data: message
          })
          .then(function(response){
            return response.data;
          });
      };

        this.deleteJob = function(id) {
          return $http({
            method: 'DELETE',
            url: '/api/resource/' + id
          })
          .then(function(response){
            return response.data;
          });
      };

    });
