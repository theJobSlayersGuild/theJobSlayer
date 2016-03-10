angular.module('app')
  .controller('homeCtrl', function($scope, hero, heroService, questService, jobService, xpService, ModalService, authService, $state) {

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

  });
