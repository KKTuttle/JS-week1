// var apiKey = require('./../.env').apiKey;
var User = require('./../js/user.js').userModule;


$(document).ready(function() {
  $('#github_form').submit(function(event) {
    event.preventDefault();
    var user_name = $('#user_name').val();
    var repoInfo =
    console.log(user_name);
    var newUser = new User(user_name);
    newUser.getUser();
    newUser.getRepos();
  });
});
