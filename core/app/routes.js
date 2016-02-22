var app = angular.module('app');

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/states/home/home.ctrl.html',
            controller: 'homeCtrl'
        })
        .state('splash', {
            url: '/splash',
            templateUrl: '/states/splash/splash.ctrl.html',
            controller: 'splashCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: '/states/profile/profile.ctrl.html',
            controller: 'profileCtrl'
        })
        .state('jobs', {
            url: '/jobs',
            templateUrl: '/states/jobs/jobs.ctrl.html',
            controller: 'jobsCtrl'
        })
        .state('resources', {
            url: '/resources',
            templateUrl: '/states/resources/resources.ctrl.html',
            controller: 'resourcesCtrl'
        })
        .state('guildmaster', {
            url: '/guildmaster',
            templateUrl: '/states/guildmaster/guildmaster.ctrl.html',
            controller: 'guildMasterCtrl'
        })

    $urlRouterProvider
        .otherwise('/home');
});