angular.module('app')
  .service('stepService', function($http) {

    this.createStep = function(step) {
      return $http({
          method: 'POST',
          url: '/api/step',
          data: step
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getSteps = function() {
      return $http({
          method: 'GET',
          url: '/api/step'
        })
        .then(function(response) {
          return response.data;
            //console.log(response.data);
        });
    };

    this.getStep = function(id) {
      return $http({
          method: 'GET',
          url: '/api/step?_id=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.editStep = function(id, step) {
      return $http({
          method: 'PUT',
          url: '/api/step/' + id,
          data: step
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.deleteStep = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/step/' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

  });
