angular.module('app')
    .service('questService', function ($http) {

      this.createQuest = function(quest) {
        return $http({
          method: 'POST',
          url: '/api/quest',
          data: quest
        })
        .then(function(response){
          return response.data;
        });
      };

      this.getQuests = function() {
          return $http({
              method: 'GET',
              url: '/api/quest'
          })
          .then(function(response) {
              return response.data;
          });
      };

      this.getQuest = function(id) {
          return $http({
            method: 'GET',
            url: '/api/quest?_id=' + id
          })
          .then(function(response){
            return response.data;
          });
        };

      this.editQuest = function(id, quest) {
          return $http({
            method: 'PUT',
            url: '/api/quest/' + id,
            data: quest
          })
          .then(function(response){
            return response.data;
          });
      };

        this.deleteQuest = function(id) {
          return $http({
            method: 'DELETE',
            url: '/api/quest/' + id
          })
          .then(function(response){
            return response.data;
          });
      };

    });
