angular.module('app')
  .controller('homeCtrl', function($scope, hero, heroService) {

    $scope.hero = hero;

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

    $scope.tips = [{
      title: 'resume',
      goatSays: 'A resume is a powerful weapon in the fight against No Jobba.',
      inputs: 1,
      description1: "Resume URL",
      buttonText: 'I have a resume!',
      invoked: function() {
        $scope.hero.equipment.resume.url = $scope.input1;
        $scope.hero.equipment.resume.done = true;
        delete $scope.hero.password;
        heroService.editHero($scope.hero);
        $scope.input1 = "";
        $scope.tips.splice(num, 1);
        $scope.currentTip = $scope.tips[num];
      }
    },
    {
      title: 'linkedin',
      goatSays: 'In this battle, a LinkedIn profile is your first line of defense.',
      inputs: 1,
      description1: "LinkedIn URL",
      buttonText: 'I have a LinkedIn profile!',
      invoked: function() {
        $scope.hero.equipment.linkedin.url = $scope.input1;
        $scope.hero.equipment.linkedin.done = true;
        delete $scope.hero.password;
        heroService.editHero($scope.hero);
        $scope.input1 = "";
        $scope.tips.splice(num, 1);
        $scope.currentTip = $scope.tips[num];
      }
    },
    {
      title: 'portfolioSite',
      goatSays: 'Shield yourself from looking dumb with a suh-weet portfolio website.',
      inputs: 1,
      description1: "Portfolio Site URL",
      buttonText: 'I have a website!',
      invoked: function() {
        $scope.hero.equipment.portfolioSite.url = $scope.input1;
        $scope.hero.equipment.portfolioSite.done = true;
        delete $scope.hero.password;
        heroService.editHero($scope.hero);
        $scope.input1 = "";
        $scope.tips.splice(num, 1);
        $scope.currentTip = $scope.tips[num];
      }
    },
    {
      title: 'meetups',
      goatSays: 'Meetups are golden, brah.',
      inputs: 0,
      buttonText: 'I attended a meetup!',
      invoked: function() {
        $scope.hero.equipment.meetups++;
        delete $scope.hero.password;
        heroService.editHero($scope.hero);
        if (num < $scope.tips.length - 1) {
          num++;
        } else {
          num = 0;
        }
        $scope.currentTip = $scope.tips[num];
      }
    },
    {
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
        delete $scope.hero.password;
        heroService.editHero($scope.hero);
        $scope.input1 = "";
        if (num < $scope.tips.length - 1) {
          num++;
        } else {
          num = 0;
        }
        $scope.currentTip = $scope.tips[num];
      }
    },
    {
      title: 'skills',
      goatSays: 'Acquire skills you must. (Sorry, my first language English is not.)',
      inputs: 1,
      description1: "Skill Name",
      buttonText: 'I learned a new skill!',
      invoked: function() {
        $scope.hero.equipment.skills.push($scope.input1);
        delete $scope.hero.password;
        heroService.editHero($scope.hero);
        if (num < $scope.tips.length - 1) {
          num++;
        } else {
          num = 0;
        }
        $scope.input1 = "";
        $scope.currentTip = $scope.tips[num];
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

    //other helmet ideas: batman mask? football helmet? propeller beanie? baseball hat with tag attached?

    //find all quests where _hero === currentUser, populate _job, populate the _steps, make an array of those quests, ng-repeat through them on the template. Also display the progress. Ugh. Too tired to even fake-code this. Goodnight.

  });
