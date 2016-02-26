/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
  .service('jobService', function($http) {

    this.createJob = function(job) {
      return $http({
          method: 'POST',
          url: '/api/job',
          data: job
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getJobs = function() {
      return $http({
          method: 'GET',
          url: '/api/job'
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getJob = function(id) {
      return $http({
          method: 'GET',
          url: '/api/job?_id=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.editJob = function(id, job) {
        console.log(id, job);
      return $http({
          method: 'PUT',
          url: '/api/job/' + id,
          data: job
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.deleteJob = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/job/' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

  });
