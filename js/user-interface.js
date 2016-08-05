// var apiKey = require('./../.env').apiKey;
var User = require('./../js/user.js').userModule;

$(document).ready(function() {
  $('.list_of_followers').hide();
  $('#github_form').submit(function(event) {
    $('.list_of_followers').show();
    event.preventDefault();
    var user_name = $('#user_name').val();
    console.log(user_name);
    var newUser = new User(user_name);
    newUser.getUser();
    newUser.getRepos();
    newUser.getFollowers();
  });
});
