var app = angular.module('app', ['ui.router']);

app.controller('mainCtrl', ["$scope", function ($scope) {
$scope.test = 'mainCtrl connected';
}]);
var app = angular.module('app');

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './app/states/home/home.ctrl.html',
            controller: 'homeCtrl'
        })
        .state('splash', {
            url: '/splash',
            templateUrl: './app/states/splash/splash.ctrl.html',
            controller: 'splashCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: './app/states/profile/profile.ctrl.html',
            controller: 'profileCtrl'
        })
        .state('jobs', {
            url: '/jobs',
            templateUrl: './app/states/jobs/jobs.ctrl.html',
            controller: 'jobsCtrl'
        })
        .state('resources', {
            url: '/resources',
            templateUrl: './app/states/resources/resources.ctrl.html',
            controller: 'resourcesCtrl'
        })
        .state('guildmaster', {
            url: '/guildmaster',
            templateUrl: './app/states/guildmaster/guildmaster.ctrl.html',
            controller: 'guildMasterCtrl'
        })

    $urlRouterProvider
        .otherwise('home');
}]);

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

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

    }]);

angular.module('app')
    .directive('dirNavBar', function () {
        return {
            restrict: 'AE',
            templateUrl: './app/directives/navbar/navbar.dir.html'
        };
    });

app.controller('guildMasterCtrl', ["$scope", function ($scope) {

    $scope.test = 'guildMasterCtrl connected'

}]);
angular.module('app')
    .controller('homeCtrl', ["$scope", function ($scope) {

        $scope.test = 'homeCtrl connected';

    }]);
angular.module('app')
    .controller('jobsCtrl', ["$scope", function ($scope) {


        $scope.test = 'jobsCtrl connected';

        /*  $scope.getJobs = function() {
         jobListService.getQuests()
         .then(function(response) {
         $scope.jobs = response;
         })
         }

         $scope.acceptJob = function(job, hero) {
         jobListService.acceptQuest({_job:job, _hero:hero})
         }

         $scope.editJob = function(job, hero) {
         jobListService
         }*/

    }]);

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

}]);

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

}]);

app.controller('splashCtrl', ["$scope", function ($scope) {

    $scope.test = 'splashCtrl connected'

}]);