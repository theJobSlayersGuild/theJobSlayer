var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);
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

/**
 * Created by brandonhebbert on 2/22/16.
 */


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
    $scope.acceptJob = function(job, hero) {

    }

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

/**
 * Created by brandonhebbert on 2/22/16.
 */

var app = angular.module('app');

app.directive('dirNavBar',  function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/navbar/navbar.dir.html'
    };
});
var app = angular.module('app');

app.controller('jobsCtrl', ["$scope", function ($scope) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {

    }

}]);
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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(job, hero) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/',
                data: job, hero

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest(job, hero)
    }

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(job, hero) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/',
                data: job, hero

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest(job, hero)
    }

}]);
var app = angular.module('app');

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

}]);
var app = angular.module('app');

app.controller('splashCtrl', ["$scope", function ($scope) {

    $scope.test = 'splashCtrl connected'

}]);
var app = angular.module('app');

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(job, hero) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/quest',
                data: job, hero

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

    }]);

var app = angular.module('app');

app.directive('dirNavBar',  function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/navbar/navbar.dir.html'
    };
});
var app = angular.module('app');

app.controller('homeCtrl', ["$scope", function ($scope) {

    $scope.test = 'homeCtrl connected';

}]);
var app = angular.module('app');

app.controller('guildMasterCtrl', ["$scope", function ($scope) {

    $scope.test = 'guildMasterCtrl connected'

}]);
var app = angular.module('app');

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest(job, hero)
    }

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(job, hero) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/quest',
                data: job, hero

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest(job, hero)
    }

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(job, hero) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: job, hero

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest(job, hero)
    }

}]);
var app = angular.module('app');

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

}]);
var app = angular.module('app');

app.controller('splashCtrl', ["$scope", function ($scope) {

    $scope.test = 'splashCtrl connected'

}]);
var app = angular.module('app');

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(job, hero) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: job, hero

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest(job, hero)
    }

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(job) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: job

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest(job, hero)
    }

}]);
var app = angular.module('app');

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

}]);
var app = angular.module('app');

app.controller('splashCtrl', ["$scope", function ($scope) {

    $scope.test = 'splashCtrl connected'

}]);
var app = angular.module('app');

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(job) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: job

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest(job, hero)
    }

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(quest) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: quest

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest({_job:job, _hero:hero})
    }

    $scope.editJob

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(quest) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: quest

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest({_job:job, _hero:hero})
    }

    $scope.editJob

}]);
var app = angular.module('app');

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

}]);
var app = angular.module('app');

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(quest) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: quest

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest({_job:job, _hero:hero})
    }


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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(quest) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: quest

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {

    $scope.test = 'jobsCtrl connected';
    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest({_job:job, _hero:hero})
    }


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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(quest) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: quest

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {


    $scope.test = 'jobsCtrl connected';

    $scope.getJobs = function() {
        jobListService.getQuests
    }

    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest({_job:job, _hero:hero})
    }


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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.acceptQuest = function(quest) { //passing in the filter object

            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: quest

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {


    $scope.test = 'jobsCtrl connected';

    $scope.getJobs = function() {
        jobListService.getQuests
    }

    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest({_job:job, _hero:hero})
    }


}]);
var app = angular.module('app');

app.controller('resourcesCtrl', ["$scope", function ($scope) {

    $scope.test = 'resourcesCtrl connected'

}]);
var app = angular.module('app');

app.controller('profileCtrl', ["$scope", function ($scope) {

    $scope.test = 'profileCtrl connected';

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.getQuests = function() {
            return $http({
                method: 'GET',
                url: ''
            })
        }

        this.acceptQuest = function(quest) {
            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: quest

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {


    $scope.test = 'jobsCtrl connected';

    $scope.getJobs = function() {
        jobListService.getQuests()
            .then(function(response) {
                $scope.jobs = response;
            })
    }

    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest({_job:job, _hero:hero})
    }


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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.getQuests = function() {
            return $http({
                method: 'GET',
                url: ''
            })
        }

        this.acceptQuest = function(quest) {
            return $http({
                method: 'POST',
                url: '/api/quest/new',
                data: quest

            }).then(function(response) {
                return response.data;
                console.log(response);
            });
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {


    $scope.test = 'jobsCtrl connected';

    $scope.getJobs = function() {
        jobListService.getQuests()
            .then(function(response) {
                $scope.jobs = response;
            })
    }

    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest({_job:job, _hero:hero})
    }


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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.getQuests = function() {
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
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {


    $scope.test = 'jobsCtrl connected';

    $scope.getJobs = function() {
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
    }

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

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobListService', ["$http", function ($http) {

        this.getQuests = function() {
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
        };

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

app.controller('jobsCtrl', ["$scope", "jobListService", function ($scope, jobListService) {


    $scope.test = 'jobsCtrl connected';

    $scope.getJobs = function() {
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
    }

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