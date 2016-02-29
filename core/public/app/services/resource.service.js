angular.module('app')
  .service('resourceService', function($http) {

    this.createResource = function(resource) {
      return $http({
          method: 'POST',
          url: '/api/resource',
          data: resource
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getResources = function() {
      return $http({
          method: 'GET',
          url: '/api/resource'
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getResourceByAuthor = function(id) {
      return $http({
          method: 'GET',
          url: '/api/resource?_author=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.editResource = function(id, resource) {
      return $http({
          method: 'PUT',
          url: '/api/resource/' + id,
          data: resource
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getResource = function(id) {
      return $http({
          method: 'GET',
          url: '/api/resource?_id=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.deleteResource = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/resource/' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

  });
