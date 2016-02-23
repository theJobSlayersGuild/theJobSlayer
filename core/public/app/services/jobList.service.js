/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', function ($http) {

      this.submitHero = function(hero) {
        return $http({
            method: 'POST',
            url: 'api/hero/signUp',
            data: hero
        }).then(function(response) {
            return response.data;
        });
      };


        /*this.getQuests = function() {
            return $http({
                method: 'GET',
                url: 'api/job/:id'
            }).then(function(response) {
                return response.data
            })
        }

        this.acceptQuest = function(quest) {
            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: quest

            }).then(function(response) {
                return response.data;
            });
        };*/

    });
