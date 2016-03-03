angular.module('app')
  .service('guildService', function($http, modalService) {

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

    this.getGuild = function(id) {
      return $http({
          method: 'GET',
          url: '/api/guild?_id=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };

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

  });
