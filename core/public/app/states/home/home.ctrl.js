angular.module('app')
    .controller('homeCtrl', function ($scope) {

        $scope.hero = {
          email: '3chordme@gmail.com',
          password: '$2a$10$ezhZdjmo7mmGbCh64/K4uugceF0UeC4kqOSxZ7KGn.AQ7ZK9LW3ZO',
          name: 'David Moore',
          title: 'the Barbarian',
          profileImage: './assets/images/angry_unicorn.png',
          dateCreated: new Date(),
          xp: 834,
          level: 1,
          equipment: {
            resume: {
              name: 'Resume',
              url: 'https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button',
              done: true
            },
            linkedin: {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/davidcollinsmoore',
              done: true
            },
            portfolioSite: {
            name: 'Portfolio',
            done: false
            },
            meetups: 2,
            skills: [ 'HTML', 'CSS', 'AngularJS', 'NodeJS', 'mongoose' ],
            projects: [{
              name: 'Wearther'
            },
            {
              name: 'Reviewnicorn',
              url: 'https://limitless-shelf-17558.herokuapp.com/#/login'
            }]
          }
        };

        switch ($scope.hero.level) {
          case 1:
            $scope.weapon = "Thumping Stick";
            $scope.shield = "Stop Sign";
            $scope.armor = "Peasant Robe";
            $scope.helmet = "Feathered Cap";
            break;
          case 2:
            $scope.weapon = "Dagger";
            $scope.shield = "Buckler";
            $scope.armor = "Leather Armor";
            $scope.helmet = "Viking Helmet";
            break;
          case 3:
            $scope.weapon = "Warhammer";
            $scope.shield = "Wooden Shield";
            $scope.armor = "Chain Mail";
            $scope.helmet = "Spartan Helmet";
            break;
          case 4:
            $scope.weapon = "Longsword";
            $scope.shield = "Steel Shield";
            $scope.armor = "Plate Mail";
            $scope.helmet = "Knight Helmet";
            break;
          case 5:
            $scope.weapon = "Battle Axe";
            $scope.shield = "Mithril Tower Shield";
            $scope.armor = "Spiked Plate Mail";
            $scope.helmet = "Dragon Skull Helmet";
            break;
          case 6:
            $scope.weapon = "Lightsaber";
            $scope.shield = "Legendary Golden Shield of Aslan";
            $scope.armor = "Dragon Scale Armor";
            $scope.helmet = "Darth Vader Helmet";
            break;
          }

        //AVATAR DISPLAY:

        //if (linkedin url) { weapon }
        //if (resume) { shield }
        //if (portfolio site) { hat }

        //other helmets batman mask? football helmet? propeller beanie? baseball hat with tag attached?

        //meetups = silver coins
        //what about networking contacts? gold coins?
        //skills = potions
        //projects = gems

    });
