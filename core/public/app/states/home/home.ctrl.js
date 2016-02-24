angular.module('app')
    .controller('homeCtrl', function ($scope) {

        $scope.hero = {
          email: '3chordme@gmail.com',
          password: '$2a$10$ezhZdjmo7mmGbCh64/K4uugceF0UeC4kqOSxZ7KGn.AQ7ZK9LW3ZO',
          name: 'David Moore',
          title: 'the Barbarian',
          profileImage: 'https://github.com/images/error/angry_unicorn.png',
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

    });
