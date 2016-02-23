angular.module('app')
  .service('stepService', function($http) {

    this.createJob = function(step) {
      return $http({
          method: 'POST',
          url: '/api/step',
          data: step
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getJobs = function() {
      return $http({
          method: 'GET',
          url: '/api/step'
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.editJob = function(id, step) {
      return $http({
          method: 'PUT',
          url: '/api/step/' + id,
          data: message
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.deleteJob = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/step/' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

  });
