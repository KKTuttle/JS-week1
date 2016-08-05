var apiKey = require('./../.env').apiKey;
var user = require('./../js/user.js').userModule;



$(document).ready(function() {
  $('#github_form').submit(function(event) {
    event.preventDefault();
    var user_name = $('#user_name').val();
    console.log(user_name);
    $.get('https://api.github.com/users/' + user_name +'?access_token=' + apiKey).then(function(response){

      //user_name
      $('.showResult').text("Hi Katie. You inputted this Github username " + user_name + ".");
      // repos
      $('.showRepos').text("Number of repositories of " + user_name + " is " + response.public_repos + ".");

      // followers
      $('.showFollowers').text("Number of followers of " + user_name + " is " + response.followers + ".");

      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });


});
