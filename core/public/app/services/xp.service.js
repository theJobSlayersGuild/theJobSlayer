angular.module('app').service('xpService', function(heroService) {

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

});
