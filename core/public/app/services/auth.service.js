angular.module('app')
    .service('authService', function ($http) {

        this.getQuests = function() {
            return $http({
                method: 'GET',
                url: 'api/job/:id'
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
