var apiKey = require('./../.env').apiKey;

function GitHub(){

}
GitHub.prototype.getUser = function(){
  var userInput = $('#userInput').val();
  $.get('https://api.github.com/users/'+ userInput + '/repos?access_token='+ apiKey).then(function(response){
    $("ol").empty();
    for (i = 0; i < response.length; i++) {
          $('ol').append('<hr><li> Name: ' + response[i].full_name + '</li>' + 'Description: ' + response[i].description); }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };
exports.githubModule = GitHub;
