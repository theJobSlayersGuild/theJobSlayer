var app = angular.module('app', ['ui.router', 'angularModalService']);

var app = angular.module('app');

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('splash', {
            url: '/splash',
            templateUrl: './app/states/splash/splash.ctrl.html',
            controller: 'splashCtrl',
            // resolve: {
            //   hero: function(authService, $state){
            //     return authService.currentHero()
            //     .then(function(response){
            //       if (response.status !== 200) {
            //         return false;
            //       }
            //       return response.data;
            //     });
            //   }
            // }
        })
        .state('home', {
            url: '/home',
            templateUrl: './app/states/home/home.ctrl.html',
            controller: 'homeCtrl',
            resolve: {
              hero: ["authService", "$state", function(authService, $state){
                return authService.currentHero()
                .then(function(response){
                  return response.data;
                });
              }]
            }
        })
        .state('profile', {
            url: '/profile',
            templateUrl: './app/states/profile/profile.ctrl.html',
            controller: 'profileCtrl',
            resolve: {
              hero: ["authService", "$state", function(authService, $state){
                return authService.currentHero()
                .then(function(response){
                  return response.data;
                });
              }]
            }
        })
        .state('jobs', {
            url: '/jobs',
            templateUrl: './app/states/jobs/jobs.ctrl.html',
            controller: 'jobsCtrl',
            resolve: {
                hero: ["authService", "$state", function(authService, $state){
                    return authService.currentHero()
                        .then(function(response){
                            return response.data;
                        });
                }]
            }
        })
        .state('resources', {
            url: '/resources',
            templateUrl: './app/states/resources/resources.ctrl.html',
            controller: 'resourcesCtrl',
            resolve: {
              hero: ["authService", "$state", function(authService, $state){
                return authService.currentHero()
                .then(function(response){
                  return response.data;
                });
               }]
              }
        })
        .state('guildmaster', {
            url: '/guildmaster',
            templateUrl: './app/states/guildmaster/guildmaster.ctrl.html',
            controller: 'guildMasterCtrl',
            resolve: {
              hero: ["authService", "$state", function(authService, $state){
                return authService.currentHero()
                .then(function(response){
                  return response.data;
                });
              }]
            }
        })
        .state('heroes', {
            url: '/heroes',
            templateUrl: './app/states/heroes/heroes.ctrl.html',
            controller: 'heroesCtrl',
            resolve: {
              hero: ["authService", "$state", function(authService, $state){
                return authService.currentHero()
                .then(function(response){
                  return response.data;
                });
              }]
            }
        })
        .state('member', {
            url: '/member/:id',
            templateUrl: './app/states/member/member.ctrl.html',
            controller: 'memberCtrl',
            resolve: {
              hero: ["heroService", "$state", "$stateParams", function(heroService, $state, $stateParams){
                return heroService.getHero($stateParams.id)
                .then(function(response){
                  return response[0];
                });
              }]
            }
        });

    $urlRouterProvider
        .otherwise('splash');
}]);

angular.module('app')
  .service('authService', ["$http", "$state", function($http, $state) {

    this.signUp = function(hero) {
      return $http({
          method: 'POST',
          url: '/api/hero/signUp',
          data: hero
        })
        .then(function(response) {
          return response;
        }).catch(function (err) {
            return "Email already exists in the database.  Use different Email.";
        });
    };

    this.login = function(hero) {
      return $http({
          method: 'POST',
          url: '/api/hero/login',
          data: hero
        })
        .then(function(response) {
          return response;
        }).catch(function (err) {
            return "Email or password is incorrect.  Please try again.";
        });
    };

    this.currentHero = function() {
      return $http({
        method: 'GET',
        url: '/api/me'
      })
      .then(function(response) {
        delete response.data.password;
        return response;
      })
      .catch(function(err) {
        $state.go('splash');
      });
    };

    this.logout = function() {
      return $http({
        method: 'GET',
        url: '/api/hero/logout'
      })
      .then(function(response) {
        return response;
      });
    };

  }]);

angular.module('app')
  .service('guildService', ["$http", "modalService", function($http, modalService) {

    this.createGuild = function(guild) {
      return $http({
          method: 'POST',
          url: '/api/guild',
          data: guild
        })
        .then(function(response) {
          return response.data;
        });
    };


      this.getGuildsByMember = function(id) {
          return $http({
              method: 'GET',
              url: '/api/guild/member?_guildMembers=' + id
          })
              .then(function(response) {
                  return response.data;
              });
      };

    /*this.getGuild = function(id) {
      return $http({
          method: 'GET',
          url: '/api/guild?_id=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };*/

    this.getGuildsByMaster = function(id) {
      return $http({
          method: 'GET',
          url: '/api/guild?_guildMaster=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.editGuild = function(id, guild) {
      return $http({
          method: 'PUT',
          url: '/api/guild/update/' + id,
          data: guild
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.leaveGuild = function(guild, memberId) {
      console.log(guild, memberId);
      return $http({
        method: 'PUT',
        url: '/api/guild/leave?_id=' + guild._id,
        data: {
          members: memberId
        }
      })
      .then(function(response){
        modalService.alert('You have left the ' + guild.name + ' guild');
      });
    };

    this.deleteGuild = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/guild/' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

  }]);

angular.module('app')
  .service('heroService', ["$http", function($http) {

    this.getHeroes = function() {
      return $http({
          method: 'GET',
          url: '/api/hero'
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getHero = function(id) {
      return $http({
          method: 'GET',
          url: '/api/hero?_id=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getHeroByEmail = function(email) {
      return $http({
          method: 'GET',
          url: '/api/hero?email=' + email
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.editHero = function(hero) {
      delete hero.password;
      return $http({
          method: 'PUT',
          url: '/api/hero/' + hero._id,
          data: hero
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.removeHero = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/hero/' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

  }]);

/**
 * Created by brandonhebbert on 2/22/16.
 */
angular.module('app')
    .service('jobService', ["$q", "$http", function ($q, $http) {

        this.createJob = function (job) {
            return $http({
                method: 'POST',
                url: '/api/job',
                data: job
            })
                .then(function (response) {
                    return response.data;
                });
        };

        this.getJobs = function () {
            return $http({
                method: 'GET',
                url: '/api/job'
            })
                .then(function (response) {
                    return response.data;
                });
        };
        this.getPubAndPrivateJobs = function (guildIds, heroId) {
            return $http({
                method: 'POST',
                url: '/api/job/public/private?_id=' + heroId,
                data: {
                    guilds: guildIds
                }
            })
                .then(function (response) {
                    return response.data;
                });
        };


        this.getJob = function (id) {
            return $http({
                method: 'GET',
                url: '/api/job?_id=' + id
            })
                .then(function (response) {
                    return response.data;
                });
        };

        this.getJobByAuthor = function (id) {
            return $http({
                method: 'GET',
                url: '/api/job?_author=' + id
            })
                .then(function (response) {
                    return response.data;
                });
        };

        this.editJob = function (id, job) {
            console.log('also fired')
            return $http({
                method: 'PUT',
                url: '/api/job/' + id,
                data: job
            })
                .then(function (response) {
                    return response.data;
                });
        };

        this.deleteJob = function (id) {
            return $http({
                method: 'DELETE',
                url: '/api/job/' + id
            })
                .then(function (response) {
                    return response.data;
                });
        };

    }]);

angular.module("app").service("modalService", ["ModalService", "$q", function(ModalService, $q) {

  this.alert = function(input) {
    var defered = $q.defer();
    ModalService.showModal({
      templateUrl: "./app/modals/alert/alertTmpl.html",
      controller: 'alertCtrl',
      inputs: {text: input}
    }).then(function(modal) {
      modal.close.then(function(then) {
        defered.resolve(then);
      });
    });
    return defered.promise;
  };

  this.confirm = function(input) {
    var defered = $q.defer();
    ModalService.showModal({
      templateUrl: "./app/modals/confirm/confirmTmpl.html",
      controller: 'confirmCtrl',
      inputs: {text: input}
    }).then(function(modal) {
      modal.close.then(function(then) {
        defered.resolve(then);
      });
    });
    return defered.promise;
  };

}]);

angular.module('app')
  .service('questService', ["$http", function($http) {

      this.createQuest = function(quest) {
        return $http({
          method: 'POST',
          url: '/api/quest',
          data: quest
        })
        .then(function(response) {
          return response.data;
        });
    };

      this.getQuests = function(id) {
          return $http({
              method: 'GET',
              url: '/api/quest?_hero=' + id
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

  }]);

angular.module('app')
  .service('resourceService', ["$http", function($http) {

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

  }]);

angular.module('app')
  .service('stepService', ["$http", function($http) {

    this.createStep = function(step) {
      return $http({
          method: 'POST',
          url: '/api/step',
          data: step
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getSteps = function() {
      return $http({
          method: 'GET',
          url: '/api/step'
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.getStep = function(id) {
      return $http({
          method: 'GET',
          url: '/api/step?_id=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.editStep = function(id, step) {
      return $http({
          method: 'PUT',
          url: '/api/step/' + id,
          data: step
        })
        .then(function(response) {
          return response.data;
        });
    };

    this.deleteStep = function(id) {
      return $http({
          method: 'DELETE',
          url: '/api/step/' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

  }]);

angular.module('app').service('xpService', ["heroService", function(heroService) {

  this.addAndUpdate = function(hero, num) {

    hero.xp += num;

    var oldLevel = hero.level;

    if (hero.xp < 100) { hero.level = 1; } else
    if (hero.xp < 200) { hero.level = 2; } else
    if (hero.xp < 300) { hero.level = 3; } else
    if (hero.xp < 400) { hero.level = 4; } else
    if (hero.xp < 500) { hero.level = 5; } else
    { hero.level = 6; }

    var newLevel = hero.level;

    heroService.editHero(hero)
    .then(function(response) {
      console.log(response.name + ' has gained ' + num + ' xp!'); //give user feedback
      if (newLevel !== oldLevel) { console.log('You leveled up, moron!'); }
    });
  };

  this.add = function(hero, num) {

    hero.xp += num;
    var oldLevel = hero.level;

    if (hero.xp < 100) { hero.level = 1; } else
    if (hero.xp < 200) { hero.level = 2; } else
    if (hero.xp < 300) { hero.level = 3; } else
    if (hero.xp < 400) { hero.level = 4; } else
    if (hero.xp < 500) { hero.level = 5; } else
    { hero.level = 6; }

    var newLevel = hero.level;

    console.log(hero.name + ' has gained ' + num + ' xp!');
    if (newLevel !== oldLevel) { console.log('You leveled up, moron!'); }

    return hero;
    //give user feedback
  };

}]);

angular.module('app')
    .directive('dirGuildJobListing', function () {
            return {
                restrict: 'AE',
                templateUrl: './app/directives/guildjobs/guildjobs.dir.html',
                scope: {
                    job: '=',
                    hero: '=',
                    getQuests: '&',
                },

                controller: ["$scope", "jobService", "questService", "ModalService", "stepService", "guildService", function ($scope, jobService, questService, ModalService, stepService, guildService) {

                    $scope.id = $scope.hero._id

                    $scope.jobIds = [];
                    $scope.guildIds = [];


                    $scope.getPrivateAndPublic = function() {
                        jobService.getPrivateAndPublic($scope.guildIds, $scope.id)
                            .then(function(response) {
                                console.log("pandB" + response);
                            })
                    }


                    $scope.getguild = function () {
                        guildService.getGuildsByMember($scope.id)
                            .then(function (response) {
                                $scope.guilds = response;
                                console.log(response);

                                for (var i = 0; i < $scope.guilds.length; i++) {
                                    $scope.guildIds.push($scope.guilds._id);

                                    if ($scope.guilds[i].jobs > 0) {
                                        for (var j = 0; j < $scope.guilds.jobs[i].length; j++) {
                                            $scope.realGuildJobs.push($scope.guilds.jobs[i]);
                                            console.log($scope.realGuildJobs);
                                        }
                                    }

                                }
                                $scope.getPrivateAndPublic()

                            })

                    }

                    $scope.getguild();

                    $scope.getAllSteps = function () {
                        stepService.getSteps()
                            .then(function (response) {
                                $scope.stepsId = response;
                            })
                    }
                    $scope.getAllSteps();

                    $scope.acceptQuest = function (jobId, heroId, stepsId) {
                        questService.createQuest({_job: jobId, _hero: heroId, _steps: stepsId})
                            .then(function () {
                                $scope.getQuests();
                            });

                    }

                    $scope.editJob = function (jobId, heroId) {
                        jobService.editJob({_job: jobId, _hero: heroId})
                    }

                    $scope.deleteJob = function (jobId) {
                        jobService.deleteJob(jobId)
                        $scope.getJobsByGuild();
                    }

                    $scope.openEditJobModal = function (job) {
                        ModalService.showModal({
                            templateUrl: "./app/modals/editjobs/editjobModal.ctrl.html",
                            controller: "editjobCtrl",
                            inputs: {hero: $scope.hero, job: job}
                        }).then(function (modal) {
                            modal.close.then(function (then) {
                            });
                        });
                    };
                }]
            }
        }
    );
angular.module('app')
    .directive('dirMemberJobListing', function () {
        return {
            restrict: 'AE',
            templateUrl: './app/directives/memberJobs/memberJobs.dir.html',
            scope: {
                job: '=',
                hero: '=',
                getQuests: '&'
            },

            controller: ["$scope", "jobService", "questService", "ModalService", "stepService", "guildService", function ($scope, jobService, questService, ModalService, stepService, guildService) {

                $scope.getAllSteps = function () {
                    stepService.getSteps()
                        .then(function (response) {
                            $scope.stepsId = response;
                        });
                };
                $scope.getAllSteps();

                $scope.acceptQuest = function (jobId, heroId, stepsId) {
                    questService.createQuest({_job: jobId, _hero: heroId, _steps: stepsId})
                    .then(function() {
                      $scope.getQuests();
                    });
                };

                $scope.editJob = function (jobId, heroId) {
                    jobService.editJob({_job: jobId, _hero: heroId});
                };

                $scope.deleteJob = function (jobId) {
                    jobService.deleteJob(jobId);
                    $scope.getJobs();
                };

                $scope.openEditJobModal = function (job) {
                    ModalService.showModal({
                        templateUrl: "./app/modals/editjobs/editjobModal.ctrl.html",
                        controller: "editjobCtrl",
                        inputs: {hero: $scope.hero, job: job}
                    }).then(function (modal) {
                        modal.close.then(function (then) {
                        });
                    });
                };
            }]
        };
    });

angular.module('app')
  .directive('dirMemberResources', function() {
    return {
      restrict: 'AE',
      templateUrl: './app/directives/memberResources/memberResources.dir.html',
      scope: {
        resource: '=',
        hero: '='
      },
      controller: ["$scope", "ModalService", "resourceService", "authService", "modalService", function($scope, ModalService, resourceService, authService, modalService) {

        $scope.openEditResourceModal = function(resource) {
          ModalService.showModal({
            templateUrl: "./app/modals/editResource/editResourceModal.html",
            controller: "editResourceModal",
            inputs: {
              hero: $scope.hero,
              resource: $scope.resource
            }
          }).then(function(modal) {
            modal.close.then(function(then) {});
          });
        };
        $scope.deleteResource = function(resourceId) {
          resourceService.deleteResource(resourceId).then(function(response) {
            modalService.alert("Resource Deleted!");
          });
        };

      }]
    };
  });

angular.module('app')
  .directive('dirNavBar', function() {
    return {
      restrict: 'AE',
      templateUrl: './app/directives/navbar/navbar.dir.html',
      scope: {
        hero: '='
      },
      controller: ["$scope", "$state", "authService", function($scope, $state, authService) {

        $scope.logout = function() {

          authService.logout()
            .then(function(response) {
            });
          $state.go('splash');
        };
      }]
    };
  });

angular.module('app')
    .directive('dirJobListing', function () {

            return {
                restrict: 'AE',
                templateUrl: './app/directives/postjobs/postjobs.dir.html',
                scope: {
                    job: '=',
                    hero: '=',
                    getQuests: '&',
                },

                controller: ["$scope", "jobService", "questService", "ModalService", "stepService", "guildService", function ($scope, jobService, questService, ModalService, stepService, guildService) {

                    $scope.id = $scope.hero._id
                    $scope.jobIds = [];
                    $scope.guildIds = [];


                    $scope.getguild = function () {
                        guildService.getGuildsByMember($scope.id)
                            .then(function (response) {
                                $scope.guilds = response;
                                for (var i = 0; i < $scope.guilds.length; i++) {
                                    var guild = $scope.guilds[i];
                                    $scope.guildIds.push(guild._id);
                                }
                            })
                    }

                    $scope.getguild();

                    $scope.getAllSteps = function () {
                        stepService.getSteps()
                            .then(function (response) {
                                $scope.stepsId = response;
                            })
                    }
                    $scope.getAllSteps();

                    $scope.acceptQuest = function (jobId, heroId, stepsId) {
                        questService.createQuest({_job: jobId, _hero: heroId, _steps: stepsId})
                            .then(function () {
                                $scope.getQuests();
                            });

                    }

                    $scope.editJob = function (jobId, heroId) {
                        jobService.editJob({_job: jobId, _hero: heroId})
                    }

                    $scope.deleteJob = function (jobId) {
                        console.log('fired');
                        $scope.job.archived = true;
                        jobService.editJob(jobId, $scope.job)
                            .then(function(response) {
                                $scope.getQuests();
                                console.log(response);
                            })
                    };

                    $scope.openEditJobModal = function (job) {
                        ModalService.showModal({
                            templateUrl: "./app/modals/editjobs/editjobModal.ctrl.html",
                            controller: "editjobCtrl",
                            inputs: {hero: $scope.hero, job: job}
                        }).then(function (modal) {
                            modal.close.then(function (then) {
                                $scope.getQuests();
                            });
                        });
                    };
                }]
            }

        }
    );


angular.module('app')
  .directive('dirResources', function() {
    return {
      restrict: 'AE',
      templateUrl: './app/directives/resources/resources.dir.html',
      scope: {
        resource: '=',
        hero: '=',
        getResources: '&'
      },
      controller: ["$scope", "ModalService", "resourceService", "authService", "xpService", "modalService", function($scope, ModalService, resourceService, authService, xpService, modalService) {

        $scope.openEditResourceModal = function(resource) {
          ModalService.showModal({
            templateUrl: "./app/modals/editResource/editResourceModal.html",
            controller: "editResourceModal",
            inputs: {
              hero: $scope.hero,
              resource: $scope.resource
            }
          }).then(function(modal) {
            modal.close.then(function(then) {
              $scope.getResources();
            });
          });
        };

        $scope.deleteResource = function(resourceId) {
          resourceService.deleteResource(resourceId).then(function(response) {
            $scope.getResources();
            modalService.alert("Resource Deleted!");
          });
        };

        $scope.addXp = function() {
          xpService.addAndUpdate($scope.hero, 5);
        };

      }]
    };
  });

angular.module("app").controller("alertCtrl", ["$scope", "close", "text", function($scope, close, text) {
  $scope.close = close;
  $scope.text = text;
}]);

angular.module("app").controller("confirmCtrl", ["$scope", "close", "text", function($scope, close, text) {
  $scope.close = close;
  $scope.text = text;
}]);

angular.module("app").controller("editGuildCtrl", ["$scope", "close", "guildService", "guild", "heroService", "modalService", function($scope, close, guildService, guild, heroService, modalService) {

  $scope.editGuild = function(guild) {
    guildService.editGuild(guild._id, guild)
    .then(function(response){
      close();
    });
  };

  $scope.guild = guild;
  $scope.members = guild._guildMembers;
  $scope.guild._guildMembers = [];

for (var i = 0; i < $scope.members.length; i++) {
  $scope.guild._guildMembers.push($scope.members[i]);
}

  $scope.addMember = function(newMember) {
    for (var i = 0; i < $scope.members.length; i++) {
      if(newMember === $scope.members[i].email || newMember === guild._guildMaster.email) {
        modalService.alert('User already a member of this guild');
        return;
      }
    }
    heroService.getHeroByEmail(newMember)
    .then(function(response){
      if (response.length < 1) {
        modalService.alert('Not a JobSlayer User');
      } else {
        $scope.guild._guildMembers.push(response[0]._id);
        $scope.members.push(response[0]);
      }
    });
  };

  $scope.deleteMember = function($index) {
    $scope.guild._guildMembers.splice($index, 1);
    $scope.members.splice($index, 1);
  };

  $scope.close = close;

}]);

angular.module("app").controller("editImageCtrl", ["$scope", "close", function($scope, close) {

  $scope.editImage = function(image) {
    if (!image) {
      image = './assets/images/angry_unicorn.png';
      close(image);
    } else {
      close(image);
    }
  };

  $scope.close = close;

}]);

angular.module("app").controller("editProfileCtrl", ["$scope", "close", "text", function($scope, close, text) {
  $scope.close = close;
  $scope.text = text;

  $scope.edit = function(newInfo, title) {
    console.log(newInfo);

    switch (text) {
      case 'EDIT HERO':
        close({
          name: newInfo,
          title: title
        });
        break;
      case 'EDIT RESUME':
        close({
          resume: newInfo
        });
        break;
      case 'EDIT LINKEDIN':
        close({
          linkedin: newInfo
        });
        break;
      case 'EDIT PORTFOLIO':
        close({
          portfolioSite: newInfo
        });
        break;
    }
  };

}]);

angular.module("app").controller("editResourceModal", ["$scope", "resourceService", "close", "hero", "resource", "modalService", function($scope, resourceService, close, hero, resource, modalService) {
    $scope.close = close;
    $scope.hero = hero;
    $scope.resource = resource;

    $scope.updateResource = function (id, resource) {
        resourceService.editResource(id, resource).then(function (response) {
            $scope.close();
            modalService.alert('Resource updated successfully!');
        });
    };
}]);

angular.module("app").controller("editjobCtrl", ["$scope", "jobService", "questService", "close", "hero", "job", function($scope, jobService, questService, close, hero, job) {
    $scope.close = close;

    $scope.hero = hero;
    $scope.job = job;
    //$scope.job = {
    //    companyName: null,
    //    companyUrl: null,
    //    skillsRequired: [],
    //    position: null,
    //    location: {
    //        city: null,
    //        state: null,
    //    },
    //    descriptionUrl: null,
    //    summary: null,
    //    contact: {
    //        name: null,
    //        email: null,
    //        phone: null,
    //    },
    //    salary: null,
    //    equity: null,
    //    positionType: null,
    //    public: null
    //};


    $scope.addSkill = function(skill) {
        $scope.job.skillsRequired.push(skill);
    }

    $scope.removeSkill = function(skill) {
        var skillToRemove = $scope.job.skillsRequired.indexOf(skill);
    }

    

    $scope.editJobs = function(id, job) {
        jobService.editJob(id, job)
            .then(function() {
                close();
            })
    }


}]);
angular.module("app").controller("guildCtrl", ["$scope", "close", "guildService", "_guildMaster", "heroService", "xpService", "modalService", function($scope, close, guildService, _guildMaster, heroService, xpService, modalService) {

  $scope.addGuild = function(guild) {
    guild._guildMaster = _guildMaster._id;
    guildService.createGuild(guild)
      .then(function(response) {
        xpService.addAndUpdate(_guildMaster, 15);
        close();
      });
  };

  $scope.addMember = function(newMember) {
    for (var i = 0; i < $scope.members.length; i++) {
      if (newMember === $scope.members[i].email || newMember === _guildMaster.email) {
        modalService.alert('User already a member of this guild');
          return;
      }
    }
    heroService.getHeroByEmail(newMember)
      .then(function(response) {
        if (response.length < 1) {
          modalService.alert('Not a JobSlayer User');
        } else {
          $scope.guild._guildMembers.push(response[0]._id);
          $scope.members.push(response[0]);
        }
      });
  };

  $scope.deleteMember = function($index) {
    $scope.guild._guildMembers.splice($index, 1);
    $scope.members.splice($index, 1);
  };

  $scope.close = close;
  $scope.guild = {
    _guildMembers: []
  };
  $scope.members = [];
}]);

angular.module('app').controller('newResourceCtrl', ["$scope", "close", "resourceService", "hero", "xpService", function ($scope, close, resourceService, hero, xpService) {
    $scope.close = close;

    $scope.hero = hero;

    $scope.createResource = function (resource) {
        $scope.resource._author = $scope.hero._id;
        resourceService.createResource(resource).then(function (response) {
            xpService.addAndUpdate($scope.hero, 5);
            $scope.close(5);
        });
    };
}]);

angular.module("app").controller("postjobCtrl", ["$scope", "jobService", "questService", "close", "hero", "guildService", "guilds", "xpService", "modalService", function ($scope, jobService, questService, close, hero, guildService, guilds, xpService, modalService) {


    $scope.close = close;

    $scope.hero = hero;
    $scope.id = hero._id;

  $scope.name = [];
  $scope.guilds = guilds;

    $scope.job = {
        companyName: null,
        companyUrl: null,
        skillsRequired: [],
        position: null,
        location: {
            city: null,
            state: null,
        },
        descriptionUrl: null,
        summary: null,
        contact: {
            name: null,
            email: null,
            phone: null,
        },
        salary: null,
        equity: null,
        positionType: null,
        public: true,
        _guild: []
    };

    $scope.updateJobGuildArray = function (guildName, guildId) {
        if ($scope.name.indexOf(guildName) === -1) {
            $scope.job._guild.push(guildId);
            $scope.name.push(guildName);
        } else {

            if ($scope.name.indexOf(guildName) !== -1) {
                $scope.job._guild.splice($scope.job._guild.IndexOf(guildId), 1);
                $scope.name.splice($scope.name.indexOf(guildName), 1);
            }
        }
    };

    $scope.changeToPrivate = function () {
        $scope.job.public = !$scope.job.public;
    };

    $scope.addSkill = function (skill) {
        if (skill !== null && skill !== undefined && skill !== "") {
            $scope.job.skillsRequired.push(skill);
        }
        $scope.skills = "";
    };

    $scope.removeSkill = function (skill) {
        var skillToRemove = $scope.job.skillsRequired.indexOf(skill);
        $scope.job.skillsRequired.splice(skillToRemove, 1);
    };

    $scope.createJob = function (job) {
        $scope.job._author = $scope.hero._id;
        jobService.createJob(job)

            .then(function (response) {
                for (var i = 0; i < job._guild.length; i++) {
                    guildService.editGuild(job._guild[i], {
                        $push: {
                            jobs: response._id
                        }
                    });
                }
                xpService.addAndUpdate($scope.hero, 10);
                  close(10);
            });
    };

}]);

angular.module('app').controller('questionCtrl', ["$scope", "close", function($scope, close) {

    $scope.close = close;

}]);

angular.module("app").controller("signUpCtrl", ["$scope", "close", "authService", "modalService", function($scope, close, authService, modalService) {
  $scope.close = close;

  $scope.titles = ['the Barbarian', 'the Wizard', 'the Great', 'the Magi', 'the Magician', 'the Brave', 'the Terrible', 'the Inconceivable', 'the Bodacious', 'the Illuminated One', 'the Highly Evolved'];




  $scope.signUp = function (hero) {
      $scope.hero.title = $scope.titles[Math.floor(Math.random()*$scope.titles.length)];
      authService.signUp(hero).then(function (response) {
           if (!response.data) {
               modalService.alert(response);
           }
           $scope.close();
      });
  };

}]);


app.controller('guildMasterCtrl', ["$scope", "ModalService", "guildService", "hero", "modalService", function ($scope, ModalService, guildService, hero, modalService) {

    $scope.hero = hero;

    $scope.openGuildModal = function() {
      ModalService.showModal({
        templateUrl: "./app/modals/guild/guild.ctrl.html",
        controller: "guildCtrl",
        inputs: {
          _guildMaster: hero
        }
      }).then(function(modal) {
        modal.close.then(function(then) {
          $scope.getGuilds();
        });
      });
    };

    $scope.openEditGuildModal = function(guild) {
      ModalService.showModal({
        templateUrl: "./app/modals/editGuild/editGuild.ctrl.html",
        controller: "editGuildCtrl",
        inputs: {
          guild: guild
        }
      }).then(function(modal) {
        modal.close.then(function(then) {
          $scope.getGuilds();
        });
      });
    };

    $scope.getGuilds = function() {
      guildService.getGuildsByMaster($scope.hero._id)
        .then(function(response) {
          console.log(response);
          $scope.guilds = response;
        });
    };

    $scope.getGuilds();

    $scope.deleteGuild = function(guild) {
      guildService.deleteGuild(guild)
      .then(function(response){
        $scope.getGuilds();
      });
    };

    $scope.leaveGuild = function(guild, hero) {
      modalService.confirm('Are you sure you want to part ways with ' + guild.name + '?')
        .then(function(leave) {
          if (!leave) {
            return;
          }
          if (guild._guildMaster._id === hero._id) {
            modalService.confirm('You cannot remove yourself from guilds you are the master of.  If you proceed, the guild will be deleted')
              .then(function(answer) {
                if (!answer) {
                  return;
                } else {
                  guildService.deleteGuild(guild._id)
                    .then(function(response) {
                      $scope.getGuilds();
                      modalService.alert(guild.name + ' guild deleted');
                    });
                }

              });
          } else {
            guildService.leaveGuild(guild, [hero._id])
              .then(function(response) {
                $scope.getGuilds();
              });
          }
        });
    };

}]);

app.controller('heroesCtrl', ["$scope", "heroService", "hero", function($scope, heroService, hero) {
    $scope.hero = hero;
  $scope.getHeroes = function(){
    heroService.getHeroes()
    .then(function(response){
      $scope.heroes = response;
    });
  };
  $scope.getHeroes();
}]);

angular.module('app')
  .controller('homeCtrl', ["$scope", "hero", "heroService", "questService", "jobService", "xpService", "ModalService", "authService", "$state", function($scope, hero, heroService, questService, jobService, xpService, ModalService, authService, $state) {

    $scope.hero = hero;

    $scope.xpGainedNum = 0;
    $scope.applyAnimation = false;

    var animateXp = function (resetTime, xpGainedNum) {
      $scope.applyAnimation = false;
      $scope.applyAnimation = true;
      $scope.xpGainedNum = xpGainedNum;
      setTimeout(function(){
        $scope.applyAnimation = false;
        $scope.$apply();
      }, resetTime);
    };

    $scope.getHero = function() {
      authService.currentHero()
        .then(function(response) {
          $scope.hero = response.data;
          assignEquipment();
        });
    };

    $scope.updateHero = function() {
      delete $scope.hero.password;
      heroService.editHero($scope.hero)
        .then(function(response) {
          $scope.getHero();
        });
    };

    //EQUIPMENT SWITCH CASE
    var assignEquipment = function() {
      switch ($scope.hero.level) {
        case 1:
          $scope.weapon = 'Thumping Stick';
          $scope.shield = 'Stop Sign';
          $scope.armor = 'Peasant Robe';
          $scope.helmet = 'Feathered Cap';
          break;
        case 2:
          $scope.weapon = 'Dagger';
          $scope.shield = 'Buckler';
          $scope.armor = 'Leather Armor';
          $scope.helmet = 'Viking Helmet';
          break;
        case 3:
          $scope.weapon = 'Warhammer';
          $scope.shield = 'Wooden Shield';
          $scope.armor = 'Chain Mail';
          $scope.helmet = 'Spartan Helmet';
          break;
        case 4:
          $scope.weapon = 'Longsword';
          $scope.shield = 'Steel Shield';
          $scope.armor = 'Plate Mail';
          $scope.helmet = 'Knight Helmet';
          break;
        case 5:
          $scope.weapon = 'Battle Axe';
          $scope.shield = 'Mithril Tower Shield';
          $scope.armor = 'Spiked Plate Mail';
          $scope.helmet = 'Dragon Skull Helmet';
          break;
        case 6:
          $scope.weapon = 'Lightsaber';
          $scope.shield = 'Legendary Golden Shield of Aslan';
          $scope.armor = 'Dragon Scale Armor';
          $scope.helmet = 'Darth Vader Helmet';
          break;
      }
    };

    assignEquipment();

    //other helmet ideas: batman mask? football helmet? propeller beanie? baseball hat with tag attached?

    //WISDOM GOAT TIPS

    $scope.tips = [{
      title: 'resume',
      goatSays: 'A resume is a powerful weapon in the fight against No Jobba.',
      inputs: 1,
      description1: "Resume URL",
      buttonText: 'I have a resume!',
      invoked: function() {
        $scope.hero.equipment.resume.url = $scope.input1;
        $scope.hero.equipment.resume.done = true;

        $scope.hero = xpService.add($scope.hero, 20);
        animateXp(2001, 20);

        heroService.editHero($scope.hero)
          .then(function(response) {
            $scope.getHero();
          });
        $scope.input1 = "";
        $scope.tips.splice(num, 1);
        $scope.currentTip = $scope.tips[num];
      }
    }, {
      title: 'linkedin',
      goatSays: 'If you\'ve got a good head on your shoulders, you\'ll wear a helmet. And make a linkedin profile.',
      inputs: 1,
      description1: "LinkedIn URL",
      buttonText: 'I have a LinkedIn profile!',
      invoked: function() {
        $scope.hero.equipment.linkedin.url = $scope.input1;
        $scope.hero.equipment.linkedin.done = true;

        $scope.hero = xpService.add($scope.hero, 15);
        animateXp(2001, 15);

        heroService.editHero($scope.hero)
          .then(function(response) {
            $scope.getHero();
          });
        $scope.input1 = "";
        $scope.tips.splice(num, 1);
        $scope.currentTip = $scope.tips[num];
      }
    }, {
      title: 'portfolioSite',
      goatSays: 'Shield yourself from looking dumb with a suh-weet portfolio website.',
      inputs: 1,
      description1: "Portfolio Site URL",
      buttonText: 'I have a website!',
      invoked: function() {
        $scope.hero.equipment.portfolioSite.url = $scope.input1;
        $scope.hero.equipment.portfolioSite.done = true;

        $scope.hero = xpService.add($scope.hero, 25);
        animateXp(2001, 25);

        heroService.editHero($scope.hero)
          .then(function(response) {
            $scope.getHero();
          });
        $scope.input1 = "";
        $scope.tips.splice(num, 1);
        $scope.currentTip = $scope.tips[num];
      }
    }, {
      title: 'meetups',
      goatSays: 'Meetups are golden, brah.',
      inputs: 0,
      buttonText: 'I attended a meetup!',
      invoked: function() {
        $scope.hero.equipment.meetups++;

        $scope.hero = xpService.add($scope.hero, 10);
        $scope.xpGainedNum = 10;
        animateXp(2001, 10);

        heroService.editHero($scope.hero)
          .then(function(response) {
            $scope.getHero();
          });
        if (num < $scope.tips.length - 1) {
          num++;
        } else {
          num = 0;
        }
        $scope.currentTip = $scope.tips[num];
      }
    }, {
      title: 'projects',
      goatSays: 'Baa-a-a-a-a-a do some projects. Something something gemeralds.',
      inputs: 2,
      description1: "Project Name",
      description2: "Project URL",
      buttonText: 'I finished a project!',
      invoked: function() {
        var newProject = {};
        newProject.name = $scope.input1;
        newProject.url = $scope.input2;
        $scope.hero.equipment.projects.push(newProject);

        $scope.hero = xpService.add($scope.hero, 30);
        animateXp(2001, 30);

        heroService.editHero($scope.hero)
          .then(function(response) {
            $scope.getHero();
          });
        $scope.input1 = "";
        if (num < $scope.tips.length - 1) {
          num++;
        } else {
          num = 0;
        }
        $scope.currentTip = $scope.tips[num];
      }
    }, {
      title: 'skills',
      goatSays: 'Acquire skills you must. (Sorry I am. English my first language is not.)',
      inputs: 1,
      description1: "Skill Name",
      buttonText: 'I learned a new skill!',
      invoked: function() {
        $scope.hero.equipment.skills.push($scope.input1);

        $scope.hero = xpService.add($scope.hero, 10);
        animateXp(2001, 10);

        heroService.editHero($scope.hero)
          .then(function(response) {
            $scope.getHero();
          });
        $scope.input1 = "";
      }
    }, {
      title: 'bounty',
      goatSays: 'Go create and accept quests from the Bounty Board! Follow the instructions, and you\'ll soon find Jobba.',
      inputs: 0,
      buttonText: 'Check the Bounty Board',
      invoked: function() {
        $state.go('jobs');
      }
    }, {
      title: 'resources',
      goatSays: 'The Adventurers\' Log is full of resources submitted by users--HEROES! I meant to say "heroes". Heroes just like you.',
      inputs: 0,
      buttonText: 'Visit the Adventurers\' Log',
      invoked: function() {
        $state.go('resources');
      }
    }, {
      title: 'guildmaster',
      goatSays: 'Want to make quests only visible to certain heroes? You\'re going to need a guild.',
      inputs: 0,
      buttonText: 'Visit the Guild Hall',
      invoked: function() {
        $state.go('guildmaster');
      }
    }, {
      title: 'guildmaster',
      goatSays: 'Want to see how well you stack up against other Jobba hunters? Of course you do.',
      inputs: 0,
      buttonText: 'Visit the Hall of Heroes',
      invoked: function() {
        $state.go('heroes');
      }
    }];

    for (var i = 0; i < $scope.tips.length; i++) {
      if ($scope.tips[i].title === 'resume' && $scope.hero.equipment.resume.done) {
        $scope.tips.splice(i, 1);
      }
      if ($scope.tips[i].title === 'linkedin' && $scope.hero.equipment.linkedin.done) {
        $scope.tips.splice(i, 1);
      }
      if ($scope.tips[i].title === 'portfolioSite' && $scope.hero.equipment.portfolioSite.done) {
        $scope.tips.splice(i, 1);
      }
    }

    var num = 0;

    $scope.currentTip = $scope.tips[num];

    $scope.nextTip = function() {
      if (num < $scope.tips.length - 1) {
        num++;
      } else {
        num = 0;
      }
      $scope.currentTip = $scope.tips[num];
      $scope.showPreviousButton = true;
    };

    $scope.previousTip = function() {
      if (num > 0) {
        num--;
      } else {
        num = $scope.tips.length - 1;
      }
      $scope.currentTip = $scope.tips[num];
    };

    //OTHER STUFF

    $scope.getQuests = function() {
      questService.getQuests(hero._id)
        .then(function(response) {
          $scope.quests = response;
        });
    };

    $scope.getQuests();

    $scope.nextStep = function(currentQuest) {
      currentQuest.progress++;

      if (currentQuest.progress === currentQuest._steps.length) {
        xpService.addAndUpdate(hero, 15);
        animateXp(2001, 15);
        currentQuest.completed = true;
      } else {
        xpService.addAndUpdate(hero, 10);
        animateXp(2001, 10);
      }
      questService.editQuest(currentQuest._id, currentQuest);
    };

    $scope.archiveQuest = function(currentQuest) {
      currentQuest.archived = true;
      questService.editQuest(currentQuest._id, currentQuest);
    };

    $scope.deleteQuest = function(currentQuest) {
      questService.deleteQuest(currentQuest._id);
      for (var i = 0; i < $scope.quests.length; i++) {
        if ($scope.quests[i]._id === currentQuest._id) {
          $scope.quests.splice(i, 1);
        }
      }
    };

    $scope.getJobs = function() {
      jobService.getJobs()
        .then(function(response) {
          $scope.jobs = response;
        });
    };

    $scope.getJobs();

    //MODALS

    $scope.openQuestionModal = function() {
      ModalService.showModal({
        templateUrl: "./app/modals/question/question.ctrl.html",
        controller: "questionCtrl"
      }).then(function(modal) {
        // Function that runs when modal closes
        modal.close.then(function(then) {});
      });
    };

    $scope.setTip = function(title) {
      for (var i = 0; i < $scope.tips.length; i++) {
        if ($scope.tips[i].title === title) {
          $scope.currentTip = $scope.tips[i];
        }
      }
    };

  }]);

app.controller('memberCtrl', ["$scope", "jobService", "resourceService", "hero", "ModalService", "authService", "heroService", "guildService", function($scope, jobService, resourceService, hero, ModalService, authService, heroService, guildService) {

  $scope.hero = hero;

  $scope.getJobs = function() {
    jobService.getJobByAuthor(hero._id)
      .then(function(response) {
        $scope.jobs = response;
      });
  };

  $scope.getJobs();

  $scope.getResources = function() {
    resourceService.getResourceByAuthor(hero._id)
      .then(function(response) {
        $scope.resources = response;
      });
  };

  $scope.getResources();


  $scope.openProfileImageModal = function() {
    ModalService.showModal({
      templateUrl: "./app/modals/editImage/editimage.ctrl.html",
      controller: "editImageCtrl"
    }).then(function(modal) {
      modal.close.then(function(newImageUrl) {
        $scope.hero.profileImage = newImageUrl;
        $scope.updateHero();
      });
    });
  };

  $scope.getGuilds = function() {
    guildService.getGuildsByMember($scope.hero._id)
    .then(function(response){
      console.log(response);
      $scope.guilds = response;
    });
  };

  $scope.getGuilds();

  $scope.getHero = function(){
    authService.currentHero()
    .then(function(response){
      $scope.hero = response.data;
    });
  };

  $scope.updateHero = function(){
    delete $scope.hero.password;
    heroService.editHero($scope.hero)
    .then(function(response){
      $scope.getHero();
    });
  };

}]);

angular.module('app')

    .controller('jobsCtrl', ["$scope", "ModalService", "hero", "jobService", "xpService", "guildService", "questService", function ($scope, ModalService, hero, jobService, xpService, guildService, questService) {


        $scope.hero = hero;
        $scope.id = $scope.hero._id;
        $scope.guildIds = [];
        $scope.realGuildJobs = [];
        $scope.privateJobs = [];
        $scope.publicJobs = [];
        $scope.publicAndPrivateJobs = [];
        $scope.allJobs = [];
        $scope.currentQuests = [];
        $scope.guildJobs = [];

        $scope.xpGainedNum = 0;
        $scope.applyAnimation = false;

        var animateXp = function (resetTime, xpGainedNum) {
          $scope.applyAnimation = false;
          $scope.applyAnimation = true;
          $scope.xpGainedNum = xpGainedNum;
          setTimeout(function(){
            $scope.applyAnimation = false;
            $scope.$apply();
          }, resetTime);
        };

        $scope.getguild = function () {
            guildService.getGuildsByMember($scope.id)
                .then(function (response) {
                    $scope.guilds = response;
                    for (var i = 0; i < $scope.guilds.length; i++) {
                        for (var j = 0; j < $scope.guilds[i].jobs.length; j++) {
                            $scope.realGuildJobs.push($scope.guilds[i].jobs[j]);
                        }
                        $scope.guildIds.push($scope.guilds._id);
                    }
                    $scope.getPrivateAndPublic();
                });
        };

        $scope.getguild();

        $scope.getPrivateAndPublic = function () {
            jobService.getPubAndPrivateJobs($scope.guildIds, $scope.id)
                .then(function (response) {
                    $scope.publicAndPrivateJobs = $scope.privateJobs.concat($scope.publicJobs);
                    $scope.privateJobs = response.private;
                    $scope.publicJobs = response.public;
                    $scope.publicAndPrivateJobs = $scope.publicJobs.concat($scope.privateJobs);
                    $scope.allJobs = $scope.publicAndPrivateJobs.concat($scope.realGuildJobs);
                    $scope.getCurrentHeroQuests();
                });
        };

        $scope.getCurrentHeroQuests = function () {
            questService.getQuests($scope.id)
                .then(function (response) {
                    $scope.currentQuests = response;
                    for (var i = 0; i < $scope.currentQuests.length; i++) {
                        for (var j = 0; j < $scope.allJobs.length; j++) {
                            if ($scope.currentQuests[i]._job._id === $scope.allJobs[j]._id) {
                                $scope.allJobs[j].accepted = true;
                            }
                        }
                    }
                });
        };


        $scope.openPostJobModal = function () {
            ModalService.showModal({
                templateUrl: "./app/modals/postjobs/postjobModal.ctrl.html",
                controller: "postjobCtrl",
                inputs: {hero: $scope.hero, guilds: $scope.guilds}
            }).then(function (modal) {
                modal.close.then(function (then) {
                    if (then === 10) {
                      animateXp(2001, 10);
                    }
                    $scope.getguild();
                });
            });
        };

    }]);

app.controller('profileCtrl', ["$scope", "$state", "jobService", "resourceService", "hero", "ModalService", "authService", "heroService", "guildService", "modalService", function($scope, $state, jobService, resourceService, hero, ModalService, authService, heroService, guildService, modalService) {

  $scope.hero = hero;
  $scope.getJobs = function() {
    jobService.getJobByAuthor(hero._id)
      .then(function(response) {
        $scope.jobs = response;
      });
  };

  $scope.getJobs();

  $scope.getResources = function() {
    resourceService.getResourceByAuthor(hero._id)
      .then(function(response) {
        $scope.resources = response;
      });
  };

  $scope.getResources();

  $scope.openProfileImageModal = function() {
    ModalService.showModal({
      templateUrl: "./app/modals/editImage/editimage.ctrl.html",
      controller: "editImageCtrl"
    }).then(function(modal) {
      modal.close.then(function(newImageUrl) {
        $scope.hero.profileImage = newImageUrl;
        $scope.updateHero();
      });
    });
  };

  $scope.openEditHeroModal = function(text) {
    ModalService.showModal({
      templateUrl: "./app/modals/editProfile/editProfile.ctrl.html",
      controller: "editProfileCtrl",
      inputs: {
        text: text
      }
    }).then(function(modal) {
      modal.close.then(function(newInfo) {
        if (!newInfo) {
          return;
        }
        switch (text) {
          case 'EDIT HERO':
            $scope.hero.name = newInfo.name;
            $scope.hero.title = newInfo.title;
            break;
          case 'EDIT RESUME':
            $scope.hero.equipment.resume.url = newInfo.resume;
            if (!newInfo.resume) {
              $scope.hero.equipment.resume.done = false;
            } else {
              $scope.hero.equipment.resume.done = true;
            }
            break;
          case 'EDIT LINKEDIN':
            $scope.hero.equipment.linkedin.url = newInfo.linkedin;
            if (!newInfo.linkedin) {
              $scope.hero.equipment.linkedin.done = false;
            } else {
              $scope.hero.equipment.linkedin.done = true;
            }
            break;
          case 'EDIT PORTFOLIO':
            $scope.hero.equipment.portfolioSite.url = newInfo.portfolioSite;
            if (!newInfo.portfolioSite) {
              $scope.hero.equipment.portfolioSite.done = false;
            } else {
              $scope.hero.equipment.portfolioSite.done = true;
            }
            break;
        }
        $scope.updateHero();
      });
    });
  };

  $scope.getGuilds = function() {
    guildService.getGuildsByMember($scope.hero._id)
      .then(function(response) {
        console.log(response);
        $scope.guilds = response;
      });
  };

  $scope.getGuilds();

  $scope.leaveGuild = function(guild, hero) {
    modalService.confirm('Are you sure you want to part ways with ' + guild.name + '?')
      .then(function(leave) {
        if (!leave) {
          return;
        }
        if (guild._guildMaster === hero._id) {
          modalService.confirm('You cannot remove yourself from guilds you are the master of.  If you proceed, the guild will be deleted')
            .then(function(answer) {
              if (!answer) {
                return;
              } else {
                guildService.deleteGuild(guild._id)
                  .then(function(response) {
                    $scope.getGuilds();
                    modalService.alert(guild.name + ' guild deleted');
                  });
              }

            });
        } else {
          guildService.leaveGuild(guild, [hero._id])
            .then(function(response) {
              $scope.getGuilds();
            });
        }
      });
  };

  $scope.getHero = function() {
    authService.currentHero()
      .then(function(response) {
        $scope.hero = response.data;
      });
  };

  $scope.updateHero = function() {
    delete $scope.hero.password;
    heroService.editHero($scope.hero)
      .then(function(response) {
        $scope.getHero();
      });
  };
  
  $scope.deleteProfile = function() {
      console.log('fired')
      heroService.removeHero($scope.hero._id)
      .then(function(response) {
          alert(response.name + 'has been deleted.  Have a nice life!');
          $state.go('splash');
      }); 
  };

}]);

app.controller('resourcesCtrl', ["$scope", "resourceService", "ModalService", "hero", "xpService", function ($scope, resourceService, ModalService, hero, xpService) {

    $scope.hero = hero;

    $scope.xpGainedNum = 0;
    $scope.applyAnimation = false;

    var animateXp = function (resetTime, xpGainedNum) {
      $scope.applyAnimation = false;
      $scope.applyAnimation = true;
      $scope.xpGainedNum = xpGainedNum;
      setTimeout(function(){
        $scope.applyAnimation = false;
        $scope.$apply();
      }, resetTime);
    };


     $scope.getResources = function () {
            resourceService.getResources().then(function(response) {
            $scope.resources = response;
          });
        };

    $scope.getResources();

     $scope.openNewResourceModal = function() {
        ModalService.showModal({
            templateUrl: "./app/modals/newResource/newResource.ctrl.html",
            controller: "newResourceCtrl",
            inputs: {hero: $scope.hero}
        }).then(function (modal) {
            modal.close.then(function (then) {
                if (then === 5) {
                  animateXp(2001, 5);
                }
                $scope.getResources();
            });
        });
    };


}]);

app.controller('splashCtrl', ["$state", "$scope", "ModalService", "authService", "xpService", "modalService", function ($state, $scope, ModalService, authService, xpService, modalService) {


    $scope.user = false;

    $scope.openSignUpModal = function () {
        ModalService.showModal({
            templateUrl: "./app/modals/signup/signup.ctrl.html",
            controller: "signUpCtrl"
        }).then(function (modal) {
            modal.close.then(function (then) {
            });
        });
    };

    $scope.submitLogin = function (hero) {
      authService.login(hero)
        .then(function (response) {
          if (!response.data) {
              modalService.alert(response);
          }
          xpService.addAndUpdate(response.data, 1);
          $state.go('home');
        });
    };

}]);

/*angular-modal-service v0.6.9 - https://github.com/dwmkerr/angular-modal-service */
!function(){"use strict";var e=angular.module("angularModalService",[]);e.factory("ModalService",["$animate","$document","$compile","$controller","$http","$rootScope","$q","$templateRequest","$timeout",function(e,n,r,t,l,o,c,u,a){function i(){var n=this,l=function(e,n){var r=c.defer();return e?r.resolve(e):n?u(n,!0).then(function(e){r.resolve(e)},function(e){r.reject(e)}):r.reject("No template or templateUrl has been specified."),r.promise},i=function(n,r){var t=n.children();return t.length>0?e.enter(r,n,t[t.length-1]):e.enter(r,n)};n.showModal=function(n){var u=c.defer(),p=n.controller;return p?(l(n.template,n.templateUrl).then(function(l){var p=(n.scope||o).$new(),d=c.defer(),f=c.defer(),m={$scope:p,close:function(n,r){(void 0===r||null===r)&&(r=0),a(function(){d.resolve(n),e.leave($).then(function(){f.resolve(n),p.$destroy(),m.close=null,u=null,d=null,j=null,m=null,$=null,p=null})},r)}};n.inputs&&angular.extend(m,n.inputs);var v=r(l),$=v(p);m.$element=$;var h=p[n.controllerAs],g=t(n.controller,m,!1,n.controllerAs);n.controllerAs&&h&&angular.extend(g,h),n.appendElement?i(n.appendElement,$):i(s,$);var j={controller:g,scope:p,element:$,close:d.promise,closed:f.promise};u.resolve(j)}).then(null,function(e){u.reject(e)}),u.promise):(u.reject("No controller has been specified."),u.promise)}}var s=n.find("body");return new i}])}();
//# sourceMappingURL=angular-modal-service.min.js.map