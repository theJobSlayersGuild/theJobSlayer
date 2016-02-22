var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app');

app.controller('mainCtrl', ["$scope", function ($scope) {
$scope.test = 'mainCtrl connected';
}]);
var app = angular.module('app');

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

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
}]);


var app = angular.module('app');

app.directive('dirNavBar',  function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/navbar/navbar.dir.html'
    };
});
var app = angular.module('app');

app.controller('guildMasterCtrl', ["$scope", function ($scope) {

    $scope.test = 'guildMasterCtrl connected'

}]);
var app = angular.module('app');

app.controller('homeCtrl', ["$scope", function ($scope) {

    $scope.test = 'homeCtrl connected';

}]);
var app = angular.module('app');

app.controller('jobsCtrl', ["$scope", function ($scope) {

    $scope.test = 'jobsCtrl connected';

}]);
var app = angular.module('app');

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

}]);
var app = angular.module('app');

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

}]);
var app = angular.module('app');

app.controller('splashCtrl', ["$scope", function ($scope) {

    $scope.test = 'splashCtrl connected'

}]);
var app = angular.module('app');

app.controller('mainCtrl', ["$scope", function ($scope) {
$scope.test = 'mainCtrl connected';
}]);
var app = angular.module('app');

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

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
}]);


var app = angular.module('app');

app.directive('dirNavBar',  function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/navbar/navbar.dir.html'
    };
});
var app = angular.module('app');

app.controller('guildMasterCtrl', ["$scope", function ($scope) {

    $scope.test = 'guildMasterCtrl connected'

}]);
var app = angular.module('app');

app.controller('homeCtrl', ["$scope", function ($scope) {

    $scope.test = 'homeCtrl connected';

}]);
var app = angular.module('app');

app.controller('jobsCtrl', ["$scope", function ($scope) {

    $scope.test = 'jobsCtrl connected';

}]);
var app = angular.module('app');

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

}]);
var app = angular.module('app');

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

}]);
var app = angular.module('app');

app.controller('splashCtrl', ["$scope", function ($scope) {

    $scope.test = 'splashCtrl connected'

}]);
var app = angular.module('app');

app.controller('mainCtrl', ["$scope", function ($scope) {
$scope.test = 'mainCtrl connected';
}]);
var app = angular.module('app');

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

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
}]);


var app = angular.module('app');

app.directive('dirNavBar',  function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/navbar/navbar.dir.html'
    };
});
var app = angular.module('app');

app.controller('guildMasterCtrl', ["$scope", function ($scope) {

    $scope.test = 'guildMasterCtrl connected'

}]);
var app = angular.module('app');

app.controller('homeCtrl', ["$scope", function ($scope) {

    $scope.test = 'homeCtrl connected';

}]);
var app = angular.module('app');

app.controller('jobsCtrl', ["$scope", function ($scope) {

    $scope.test = 'jobsCtrl connected';

}]);
var app = angular.module('app');

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

}]);
var app = angular.module('app');

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

}]);
var app = angular.module('app');

app.controller('splashCtrl', ["$scope", function ($scope) {

    $scope.test = 'splashCtrl connected'

}]);
var app = angular.module('app');

app.controller('mainCtrl', ["$scope", function ($scope) {
$scope.test = 'mainCtrl connected';
}]);
var app = angular.module('app');

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

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
}]);


var app = angular.module('app');

app.directive('dirNavBar',  function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/navbar/navbar.dir.html'
    };
});
var app = angular.module('app');

app.controller('guildMasterCtrl', ["$scope", function ($scope) {

    $scope.test = 'guildMasterCtrl connected'

}]);
var app = angular.module('app');

app.controller('homeCtrl', ["$scope", function ($scope) {

    $scope.test = 'homeCtrl connected';

}]);
var app = angular.module('app');

app.controller('jobsCtrl', ["$scope", function ($scope) {

    $scope.test = 'jobsCtrl connected';

}]);
var app = angular.module('app');

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

}]);
var app = angular.module('app');

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

}]);
var app = angular.module('app');

app.controller('splashCtrl', ["$scope", function ($scope) {

    $scope.test = 'splashCtrl connected'

}]);
var app = angular.module('app');

app.controller('mainCtrl', ["$scope", function ($scope) {
$scope.test = 'mainCtrl connected';
}]);
var app = angular.module('app');

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

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
}]);


var app = angular.module('app');

app.directive('dirNavBar',  function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/navbar/navbar.dir.html'
    };
});
var app = angular.module('app');

app.controller('guildMasterCtrl', ["$scope", function ($scope) {

    $scope.test = 'guildMasterCtrl connected'

}]);
var app = angular.module('app');

app.controller('homeCtrl', ["$scope", function ($scope) {

    $scope.test = 'homeCtrl connected';

}]);
var app = angular.module('app');

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

}]);
var app = angular.module('app');

app.controller('jobsCtrl', ["$scope", function ($scope) {

    $scope.test = 'jobsCtrl connected';

}]);
var app = angular.module('app');

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

}]);
var app = angular.module('app');

app.controller('splashCtrl', ["$scope", function ($scope) {

    $scope.test = 'splashCtrl connected'

}]);