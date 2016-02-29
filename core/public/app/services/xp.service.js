angular.module('app').service('xpService', function(heroService) {

  this.add = function(hero, num) {
    hero.xp += num;
    heroService.editHero(hero)
    .then(function(response) {
      console.log(response.name + ' has gained ' + num + ' xp!');
    });
  };

});
