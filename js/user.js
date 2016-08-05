var apiKey = require('./../.env').apiKey;

function User() {

}



// function User(user_name) {
//   this.user_name =user_name;
// }

// User.prototype.getUser = function () {
  // $.get('https://api.github.com/users/' + this.user_name +'?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

exports.userModule = User;
