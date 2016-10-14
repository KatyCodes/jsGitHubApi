var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#text').click(function(){
    $.get('https://api.github.com/users/katycodes/repos?access_token='+ apiKey).then(function(response){
      console.log(response);
      $('#text').html("this is working");
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
});
});
