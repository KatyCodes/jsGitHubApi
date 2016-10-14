var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#text').click(function(){
    $.get('https://api.github.com/users/katycodes/repos?access_token='+ apiKey).then(function(response){
      console.log(response);
      for (i = 0; i < response.length; i++) {
            $('ul').append('<li>' + response[i].full_name + '</li>'); }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
});
});
