var apiKey = require('./../.env').apiKey;

function User(user_name) {
  this.user_name = user_name;
}

User.prototype.getUser = function () {
  $.get('https://api.github.com/users/' + this.user_name +'?access_token=' + apiKey).then(function(response){
    $('.showResult').text(response.login + ' has ' + response.followers + " followers.");
    // console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.getRepos = function() {
  $.get('https://api.github.com/users/' + this.user_name +'/repos?access_token=' + apiKey).then(function(response){
    // console.log(response);
    var foundRepos = response;
    foundRepos.forEach(function(repo) {
      var name = repo.name;
      var describ = repo.description;
      var url = repo.html_url;
      $('.showRepositories').append('<li><a href =' + url + '>' + name +'</a></li><h6>Description :'+ describ +'</h6><hr>');
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.getFollowers = function() {
  $.get('https://api.github.com/users/'+ this.user_name + '/followers?access_token=' + apiKey).then(function(response){
    console.log(response);
    // var foundFollowers =
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
exports.userModule = User;
