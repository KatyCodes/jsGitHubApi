var apiKey = require('./../.env').apiKey;
var GitHub = require('./../js/gh.js').githubModule;


$(document).ready(function() {
  $('#button').click(function(event){
    event.preventDefault();
    var currentUser = new GitHub();
    var userInput = $('#userInput').val();
    currentUser.getUser(userInput);
  });
});
