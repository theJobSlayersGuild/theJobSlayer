var app = angular.module('app');

app.config(function ($stateProvider, $urlRouterProvider) {

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
});